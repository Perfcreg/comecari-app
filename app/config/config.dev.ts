/**
 * These are configuration settings for the dev environment.
 *
 * Do not include API secrets in this file or anywhere in your JS.
 *
 * */

import Constants from 'expo-constants';


export default {
  API_URL: Constants.expoConfig?.extra?.dev?.env?.API_URL,
  PAYSTACK_PUBLIC_KEY: Constants.expoConfig?.extra?.dev?.env?.PAYSTACK_PUBLIC_KEY,
  PAYSTACK_SECRET_KEY: Constants.expoConfig?.extra?.dev?.env?.PAYSTACK_SECRET_KEY,
  GOOGLE_MAPS_API_KEY: Constants.expoConfig?.extra?.dev?.env?.GOOGLE_MAPS_API_KEY,
  BACKEND_API_KEY: Constants.expoConfig?.extra?.dev?.env?.BACKEND_API_KEY,
  BACKEND_API_SECRET: Constants.expoConfig?.extra?.dev?.env?.BACKEND_API_SECRET  
}
