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

安装图像生成模型后，默认分辨率为 1K。使用 OpenAI 兼容格式 + `extra_body` 参数控制分辨率和宽高比：

After installing image models, default resolution is 1K. Use OpenAI-compatible format + `extra_body` to control resolution and aspect ratio:

```bash
curl https://xingjiabiapi.org/v1/chat/completions \
  -H "Authorization: Bearer sk-xxx" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gemini-3-pro-image-preview",
    "messages": [
      {
        "role": "user",
        "content": "一只穿着宇航服的猫咪在月球上散步"
      }
    ],
    "extra_body": {
      "google": {
        "image_config": {
          "image_size": "4K",
          "aspectRatio": "16:9"
        }
      }
    }
  }'
```

**分辨率选项 | Resolution Options:**
- `1K` - 标准分辨率（默认）
- `2K` - 高清
- `4K` - 超高清

**宽高比选项 | Aspect Ratio Options:**
- `1:1` - 正方形
- `16:9` - 横屏宽幅
- `9:16` - 竖屏（手机壁纸）
- `3:2`, `4:3`, `21:9` 等

**OpenClaw 口语化调用 | Natural Language in OpenClaw:**

直接说"生成一张 4K 16:9 的日落图"，我会自动转换参数。

Just say "generate a 4K 16:9 sunset image" and I'll auto-convert the parameters.

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
