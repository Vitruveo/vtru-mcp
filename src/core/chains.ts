import { type Chain } from 'viem';


const vitruveo = {
  id: 1490,
  name: 'Vitruveo',
  network: 'vitruveo',
  iconUrl: 'https://irp.cdn-website.com/a01407ef/dms3rep/multi/fav-vit-857c1762.png',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Vitruveo',
    symbol: 'VTRU',
  },
  rpcUrls: {
    public: { http: ['https://rpc.vitruveo.xyz/'] },
    default: { http: ['https://rpc.vitruveo.xyz/'] },
  },
  blockExplorers: {
    default: { name: 'VitruveoScan', url: 'https://explorer.vitruveo.net' },
  },
  testnet: false,
};

// Default configuration values
export const DEFAULT_RPC_URL = 'https://rpc.vitruveo.xyz/';
export const DEFAULT_CHAIN_ID = 1490;

// Map chain IDs to chains
export const chainMap: Record<number, Chain> = {

  1490: vitruveo,

};


export const rpcUrlMap: Record<number, string> = {
  
  1490: 'https://rpc.vitruveo.xyz/',
  
};

/**
 * Resolves a chain identifier (number or string) to a chain ID
 * @param chainIdentifier Chain ID (number) or network name (string)
 * @returns The resolved chain ID
 */
export function resolveChainId(chainIdentifier: number | string): number {
  return DEFAULT_CHAIN_ID;
}

/**
 * Returns the chain configuration for the specified chain ID or network name
 * @param chainIdentifier Chain ID (number) or network name (string)
 * @returns The chain configuration
 * @throws Error if the network is not supported (when string is provided)
 */
export function getChain(chainIdentifier: number | string = DEFAULT_CHAIN_ID): Chain {
  return vitruveo;
}

/**
 * Gets the appropriate RPC URL for the specified chain ID or network name
 * @param chainIdentifier Chain ID (number) or network name (string)
 * @returns The RPC URL for the specified chain
 */
export function getRpcUrl(chainIdentifier: number | string = DEFAULT_CHAIN_ID): string {
  return DEFAULT_RPC_URL;
}

/**
 * Get a list of supported networks
 * @returns Array of supported network names (excluding short aliases)
 */
export function getSupportedNetworks(): string[] {
  return ['vitruveo'];
} 
