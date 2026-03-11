const fs = require('fs');
const path = require('path');
const os = require('os');

const modelName = process.argv[2];
const apiKey = process.argv[3];

if (!modelName || !apiKey) {
  console.error('Usage: node setup.js <MODEL_NAME> <API_KEY>');
  console.error('Example: node setup.js claude-opus-4-6 sk-xxx');
  process.exit(1);
}

// Auto-detect API type
function detectApiType(model) {
  if (model.includes('claude')) return 'anthropic-messages';
  if (model.includes('gpt')) return 'openai-responses';
  if (model.includes('gemini')) return 'google-generative-ai';
  throw new Error(`Unknown model type: ${model}`);
}

// Auto-detect base URL
function getBaseUrl(model) {
  if (model.includes('claude')) return 'https://xingjiabiapi.org';
  return 'https://xingjiabiapi.org/v1';
}

// Check if it's an image generation model
function isImageModel(model) {
  return model.includes('image') || model.includes('imagen');
}

// Get model config
function getModelConfig(model, apiType) {
  const base = {
    id: model,
    name: `${model} (xingjiabiapi)`,
    reasoning: false
  };
  
  // Image generation models
  if (isImageModel(model)) {
    return {
      ...base,
      input: ['text'],
      output: ['image'],
      cost: { perImage: 0 },
      capabilities: ['image-generation'],
      defaultParams: {
        size: '2048x2048',
        quality: 'standard'
      }
    };
  }
  
  // Text models
  base.input = ['text'];
  
  if (apiType === 'anthropic-messages') {
    return {
      ...base,
      cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
      contextWindow: 200000,
      maxTokens: 200000
    };
  } else {
    return {
      ...base,
      cost: { input: 0, output: 0 },
      contextWindow: model.includes('gemini') ? 1000000 : 128000,
      maxTokens: model.includes('gemini') ? 8192 : 16384
    };
  }
}

const apiType = detectApiType(modelName);
const baseUrl = getBaseUrl(modelName);
const providerName = `xjb-${modelName.split('-')[0]}`;

console.log(`Detected: ${modelName} → ${apiType} API`);

const openclawDir = path.join(os.homedir(), '.openclaw');
const openclawJson = path.join(openclawDir, 'openclaw.json');
const agentModelsJson = path.join(openclawDir, 'agents/main/agent/models.json');

// Backup
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
fs.copyFileSync(openclawJson, `${openclawJson}.backup-${timestamp}`);
fs.copyFileSync(agentModelsJson, `${agentModelsJson}.backup-${timestamp}`);
console.log('✓ Backed up configs');

// Provider config
const provider = {
  baseUrl: baseUrl,
  apiKey: apiKey,
  api: apiType,
  models: [getModelConfig(modelName, apiType)]
};

// Update openclaw.json
const config = JSON.parse(fs.readFileSync(openclawJson, 'utf8'));
config.models = config.models || {};
config.models.providers = config.models.providers || {};
config.models.providers[providerName] = provider;

config.agents = config.agents || {};
config.agents.defaults = config.agents.defaults || {};
config.agents.defaults.models = config.agents.defaults.models || {};
config.agents.defaults.models[`${providerName}/${modelName}`] = {};

fs.writeFileSync(openclawJson, JSON.stringify(config, null, 2));
console.log('✓ Updated openclaw.json');

// Update agent models.json
const agentConfig = JSON.parse(fs.readFileSync(agentModelsJson, 'utf8'));
agentConfig.providers = agentConfig.providers || {};
agentConfig.providers[providerName] = provider;

// Add to allowed models list
agentConfig.models = agentConfig.models || {};
agentConfig.models[`${providerName}/${modelName}`] = {};

fs.writeFileSync(agentModelsJson, JSON.stringify(agentConfig, null, 2));
console.log('✓ Updated agent models.json');

console.log(`\n✅ Model added: ${providerName}/${modelName}`);
console.log('Restart OpenClaw to use the new model.');
console.log('\nContact: https://xingjiabiapi.org | WeChat: malimalihongbebe');

