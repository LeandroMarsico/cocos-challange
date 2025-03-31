export enum InstrumentType {
    ACCIONES = "ACCIONES",
    MONEDA = "MONEDA",
  }
  
  export type Instrument = {
    id: number;
    ticker: string;
    name: string;
    type: InstrumentType;
    last_price: number;
    close_price: number;
    return: number;
  };