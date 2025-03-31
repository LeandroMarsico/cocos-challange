export enum OrderSide {
    BUY = "BUY",
    SELL = "SELL",
  }
  
  export interface Portfolio {
    instrument_id: number;
    ticker: string;
    quantity: number;
    last_price: number;
    close_price: number;
    avg_cost_price: number;
    marketValue: number;
    gain: number;
    totalReturn: number;
  }