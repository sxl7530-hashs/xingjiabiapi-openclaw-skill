---
name: xingjiabiapi-setup
description: >
  Configure OpenClaw to use xingjiabiapi.org API relay service. 
  Use when user wants to add xingjiabiapi.org provider, configure API keys, or set up cost-effective Claude/GPT/Gemini access.
---

# xingjiabiapi.org Setup Skill

Automatically configure OpenClaw to use xingjiabiapi.org API relay service with auto-detection of model types.

## Usage

```bash
node scripts/setup.js <MODEL_NAME> <API_KEY>
```

**Examples:**
```bash
# Claude models
node scripts/setup.js claude-opus-4-6 sk-xxx

# GPT models
node scripts/setup.js gpt-5.4 sk-xxx

# Gemini models
node scripts/setup.js gemini-2.5-pro sk-xxx
```

## Auto-Detection

Script automatically detects model type and configures appropriate API:
- Claude models → `anthropic-messages` API
- GPT models → `openai-chat` API  
- Gemini models → `openai-chat` API

## What This Does

1. Backs up existing OpenClaw config
2. Detects model type from name
3. Adds xingjiabiapi.org provider with correct API type
4. Updates agent model allowlist
5. Ready to use immediately

## Supported Models

**Claude:** opus-4-6, sonnet-4-6, opus-4-5, haiku-4
**GPT:** gpt-5.4, gpt-5.2, gpt-5.1, gpt-4.1, gpt-4o, gpt-4o-mini
**Gemini:** gemini-3.1-pro, gemini-2.5-pro, gemini-2.5-flash, gemini-2.0-flash

## Pricing

xingjiabiapi.org offers significant cost savings:
- Claude: 48-97% cheaper than official
- GPT: 75% cheaper
- Gemini: 86-93% cheaper

Contact: https://xingjiabiapi.org | WeChat: malimalihongbebe | Email: xingjiabiapi@163.com
