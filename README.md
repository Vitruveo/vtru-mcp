# Vitruveo MCP Server (`vtru-mcp`)

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Vitruveo](https://img.shields.io/badge/Network-Vitruveo-80c342)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6)
![Viem](https://img.shields.io/badge/Viem-2.0+-green)

A **Model Context Protocol (MCP)** server that provides **read-only** blockchain services for the **Vitruveo** network.

> **Vitruveo enhancement:**  
> Added `get_core_contracts`, which returns a list of core Vitruveo contract addresses (treasury, system contracts, etc.).  
> More Vitruveo-specific tools will be added over time.

> **Forked from:** `mcpdotdirect/evm-mcp-server`

---

## 📋 Contents

- Overview
- Features
- Vitruveo Tools
- Supported Network
- Prerequisites
- Installation
- Server Configuration
- Usage
- Connecting from MCP Clients
- API Reference
- Project Structure
- Development
- License

---

## 🔭 Overview

`vtru-mcp` exposes **Vitruveo chain data** to AI agents via the Model Context Protocol.

It is designed to be:

- **Vitruveo-focused** – chain ID 1490 only.
- **Read-only** – no private keys or signing.
- **MCP-native** – exposes tools + resources.
- **Dual-transport** – STDIO and HTTP/SSE.

---

## ✨ Features

### Blockchain Data

- Latest block retrieval  
- Get block by number  
- Transaction lookup  
- Transaction receipts  
- Native VTRU balance  
- Contract view/pure calls  
- Token/NFT metadata (read-only)

### Vitruveo-Specific

- `get_core_contracts` — returns Vitruveo system contract addresses.

### Safe for Public Use

- No private keys  
- No transfers or approvals  
- No write methods  

---

## 🌐 Supported Network

- **Vitruveo Mainnet**  
  - Chain ID: 1490  
  - RPC: https://rpc.vitruveo.xyz  
  - Explorer: https://explorer.vitruveo.net  

---

## 🛠️ Prerequisites

- Bun 1.0+  
- Node 18+  

---

## 📦 Installation

```
npm install -g @vitruveo/vtru-mcp
```

Or:

```
npx @vitruveo/vtru-mcp
```

From source:

```
git clone https://github.com/vitruveo/vtru-mcp.git
cd vtru-mcp
bun install
```

---

## ⚙️ Server Configuration

Defaults:

- Chain ID: 1490  
- RPC: https://rpc.vitruveo.xyz  
- Host: 0.0.0.0  
- Port: 3001  

---

## 🚀 Usage

### STDIO (default)

```
npx @vitruveo/vtru-mcp
```

### HTTP + SSE

```
npx @vitruveo/vtru-mcp --http
```

Endpoints:

- SSE: `/sse`  
- Messages: `/messages`  

---

## 🤖 Connecting from MCP Clients

### Cursor (command mode)

`.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "vtru-mcp": {
      "command": "npx",
      "args": ["@vitruveo/vtru-mcp"]
    }
  }
}
```

### Cursor (HTTP mode)

```json
{
  "mcpServers": {
    "vtru-mcp-http": {
      "url": "http://localhost:3001/sse"
    }
  }
}
```

### ChatGPT Desktop

- Type: Command  
- Command: `npx`  
- Args: `@vitruveo/vtru-mcp`

### Claude CLI

```
claude mcp add vtru-mcp npx @vitruveo/vtru-mcp
claude
```

---

## 📚 API Reference

### Tools

| Tool Name           | Description                                     |
|---------------------|-------------------------------------------------|
| `get_core_contracts`| Returns Vitruveo system contract addresses      |
| `get_chain_info`    | Chain metadata (chainId, block, rpc)            |
| `get_block`         | Fetch block by number or latest                 |
| `get_transaction`   | Transaction details                             |
| `get_balance`       | Native VTRU balance                             |
| `is_contract`       | Detect if address is a contract                 |
| `read_contract`     | View/pure call to a contract                    |

Token/NFT (read-only):

| Tool                | Description                 |
|---------------------|-----------------------------|
| `get-token-info`    | ERC20-style metadata        |
| `get-token-balance` | ERC20-style balance         |
| `get-nft-info`      | NFT metadata                |
| `get-nft-balance`   | NFT balance                 |

---

## 📁 Project Structure

```
vtru-mcp/
├── app/
│   └── mcp/
│       └── route.js
├── src/
│   └── mcp/
│       ├── chains.ts
│       ├── tools.ts
│       ├── resources.ts
│       └── services/
│           ├── balance.ts
│           ├── blocks.ts
│           ├── clients.ts
│           ├── contracts.ts
│           ├── ens.ts
│           ├── index.ts
│           ├── tokens.ts
│           ├── transactions.ts
│           ├── transfer.ts
│           └── utils.ts
├── bin/cli.js
├── build/
└── package.json
```

---

## 🛠️ Development

```
bun dev
bun dev:http
bun run build
bun run build:http
```

Publishing:

```
npm run release
```

---

## 📄 License

MIT License — see LICENSE.
