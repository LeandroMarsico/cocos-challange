import { SEARCH_URL } from "../constants/env-vars.ts";
import { Instrument } from "../types/instruments.js";


export const fetchSearchResults = async (query: string): Promise<Instrument[]> => {
  if (!query.trim()) return [];
  const formattedQuery = query.toUpperCase();
  const response = await fetch(
    `${SEARCH_URL}${encodeURIComponent(formattedQuery)}`
  );
  const data: Instrument[] = await response.json();
  return data;
};
