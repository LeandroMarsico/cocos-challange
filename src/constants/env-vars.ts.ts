import Constants from 'expo-constants';

export const API_ENDPOINTS = {
  PORTFOLIO: "portfolio",
  INSTRUMENTS: "instruments",
  SEARCH: "search?query=",
  ORDERS: "orders",
};

const BASE_URL = Constants.expoConfig?.extra?.API_BASE_URL ?? '';

export const PORTFOLIO_URL = `${BASE_URL}${API_ENDPOINTS.PORTFOLIO}`;
export const INSTRUMENTS_URL = `${BASE_URL}${API_ENDPOINTS.INSTRUMENTS}`;
export const SEARCH_URL = `${BASE_URL}${API_ENDPOINTS.SEARCH}`;
export const ORDERS_URL = `${BASE_URL}${API_ENDPOINTS.ORDERS}`;