import { createMcpHandler } from "mcp-handler";
import { registerEVMResources } from "../../src/core/resources.ts";
import { registerEVMTools } from "../../src/core/tools.ts";
import { registerEVMPrompts } from "../../src/core/prompts.ts";
import { getSupportedNetworks } from "../../src/core/chains.ts";

// Use Node.js runtime (not edge) for viem and Node APIs
export const runtime = "nodejs";

// Initialize MCP handler
const handler = createMcpHandler(
  (server) => {
    registerEVMResources(server);
    registerEVMTools(server);
    registerEVMPrompts(server);

    console.error("Vitruveo MCP Server initialized (Next.js + mcp-handler)");
    console.error(`Supported networks: ${getSupportedNetworks().join(", ")}`);
  },
  {
    // Optional server options
    // serverMetadata: { name: "vitruveo-evm", version: "1.0.0" },
  },
  {
    // Handler options
    basePath: "",
    verboseLogs: true,
  }
);

export { handler as GET, handler as POST, handler as DELETE };
