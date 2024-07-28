const BACKEND_PORT = 8000

function getBaseUrl() {
    if (typeof window !== "undefined") return window.location.origin;
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return `http://localhost:${BACKEND_PORT}`;
  }

export {
    getBaseUrl
}