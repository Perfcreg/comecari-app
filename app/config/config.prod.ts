/**
 * These are configuration settings for the production environment.
 *
 * Do not include API secrets in this file or anywhere in your JS.
 *
 * https://reactnative.dev/docs/security#storing-sensitive-info
 */


import Constants from 'expo-constants';


export default {
  API_URL: Constants.expoConfig?.extra?.prod?.env?.APi_URL,
  PAYSTACK_PUBLIC_KEY: Constants.expoConfig?.extra?.prod?.env?.PAYSTACK_PUBLIC_KEY,
  PAYSTACK_SECRET_KEY: Constants.expoConfig?.extra?.prod?.env?.PAYSTACK_SECRET_KEY,
  GOOGLE_MAPS_API_KEY: Constants.expoConfig?.extra?.prod?.env?.GOOGLE_MAPS_API_KEY,
  BACKEND_API_KEY: Constants.expoConfig?.extra?.prod?.env?.BACKEND_API_KEY,
  BACKEND_API_SECRET: Constants.expoConfig?.extra?.prod?.env?.BACKEND_API_SECRET  
}