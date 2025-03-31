import { Instrument } from "../types/instruments";
import { INSTRUMENTS_URL } from "../constants/env-vars.ts";

export const fetchInstruments = async (): Promise<Instrument[]> => {
  const response = await fetch(INSTRUMENTS_URL);  
  const data: Instrument[] = await response.json();

  return data.map((instrument) => ({
    ...instrument,
    return: ((instrument?.last_price - instrument.close_price) / instrument.close_price) * 100,
  }));
};