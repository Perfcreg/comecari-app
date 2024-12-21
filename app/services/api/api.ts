import { ApisauceInstance, create } from "apisauce"
import { DEFAULT_API_CONFIG } from "./api-config"

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json"
      },
    })
  }
}

export const api = new Api()
