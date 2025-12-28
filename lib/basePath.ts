// Helper to get the base path for GitHub Pages
export const basePath = '/ElectroWaves';

// Helper function to prefix paths with basePath
export function withBasePath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}

