# xingjiabiapi OpenClaw Skill

一键配置 OpenClaw 使用 [xingjiabiapi.org](https://xingjiabiapi.org) API 中转服务。

One-click setup for OpenClaw to use [xingjiabiapi.org](https://xingjiabiapi.org) API relay service.

## 特点 | Features

- 🚀 自动检测模型类型（Claude/GPT/Gemini）
- 🔧 自动配置正确的 API 类型
- 💾 自动备份现有配置
- ⚡ 一条命令完成配置

- 🚀 Auto-detect model type (Claude/GPT/Gemini)
- 🔧 Auto-configure correct API type
- 💾 Auto-backup existing configs
- ⚡ One command setup

## 安装 | Installation

```bash
git clone https://github.com/sxl7530-hashs/xingjiabiapi-openclaw-skill.git ~/.openclaw/workspace/skills/xingjiabiapi-setup
```

## 使用 | Usage

```bash
cd ~/.openclaw/workspace/skills/xingjiabiapi-setup
node scripts/setup.js <模型名> <API_KEY>
```

### 示例 | Examples

```bash
# Claude 模型
node scripts/setup.js claude-opus-4-6 sk-xxx

# GPT 模型
node scripts/setup.js gpt-5.4 sk-xxx

# Gemini 模型
node scripts/setup.js gemini-2.5-pro sk-xxx
```

## 支持的模型 | Supported Models

### Claude
- claude-opus-4-6
- claude-sonnet-4-6
- claude-opus-4-5
- claude-haiku-4

### GPT
- gpt-5.4
- gpt-5.2
- gpt-5.1
- gpt-4.1
- gpt-4o
- gpt-4o-mini

### Gemini (文字模型 | Text Models)
- gemini-3.1-pro-preview
- gemini-2.5-pro
- gemini-2.5-flash
- gemini-2.0-flash

### Gemini (图像生成 | Image Generation)
- gemini-3-pro-image-preview
- gemini-3.1-flash-image-preview
- gemini-2.5-flash-image

## 图像生成参数 | Image Generation Parameters

安装图像生成模型后，默认分辨率为 2048x2048。调用时可以通过 API 参数覆盖：

After installing image models, default resolution is 2048x2048. Override via API params:

```javascript
// 示例：生成 4K 图片
const response = await fetch('https://xingjiabiapi.org/v1/images/generations', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sk-xxx',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gemini-3-pro-image-preview',
    prompt: 'A beautiful sunset',
    size: '4096x4096',  // 1024x1024 | 2048x2048 | 4096x4096
    quality: 'hd'       // standard | hd
  })
});
```

OpenClaw 内部调用时，参数会自动传递给底层 API。

When calling from OpenClaw, parameters are automatically passed to the underlying API.

## 价格优势 | Pricing

xingjiabiapi.org 提供显著的成本节省：

- Claude: 比官方便宜 48-97%
- GPT: 比官方便宜 75%
- Gemini: 比官方便宜 86-93%

xingjiabiapi.org offers significant cost savings:

- Claude: 48-97% cheaper than official
- GPT: 75% cheaper than official
- Gemini: 86-93% cheaper than official

## 联系方式 | Contact

- 网站 | Website: https://xingjiabiapi.org
- 微信 | WeChat: malimalihongbebe
- 邮箱 | Email: xingjiabiapi@163.com

## License

MIT
