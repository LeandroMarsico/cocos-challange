import { Portfolio } from "../types/portfolio";
import { PORTFOLIO_URL } from "../constants/env-vars.ts";

export const fetchPortfolio = async (): Promise<Portfolio[]> => {
  const response = await fetch(PORTFOLIO_URL);
  const data: Portfolio[] = await response.json();

  return data.map((portfolioItem) => ({
    ...portfolioItem,
    marketValue: portfolioItem.last_price * portfolioItem.quantity,
    gain: (portfolioItem.last_price - portfolioItem.avg_cost_price) * portfolioItem.quantity,
    totalReturn: ((portfolioItem.last_price - portfolioItem.avg_cost_price) / portfolioItem.avg_cost_price * 100),
  }));
};