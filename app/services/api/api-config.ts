// Use this import if you want to use "env.js" file
import * as CONFIG from "../../config"

interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number,
  apiKey: string
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: CONFIG?.default.API_URL,
  apiKey: `${CONFIG?.default.BACKEND_API_KEY}:${CONFIG?.default.BACKEND_API_SECRET}`,
  timeout: 10000,
}