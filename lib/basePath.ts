// Helper to get the base path for GitHub Pages
// This should match the basePath in next.config.js
// In development, this will be empty, in production it will be '/ElectroWaves'
export const basePath = process.env.NODE_ENV === 'production' ? '/ElectroWaves' : '';

// Helper function to prefix paths with basePath
export function withBasePath(path: string): string {
  // If basePath is empty (development), just return the path
  if (!basePath) {
    return path;
  }
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}

