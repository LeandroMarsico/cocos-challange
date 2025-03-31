export const ROUTES = {
    ROOT: "index",
    PORTFOLIO: "portfolio",
    SEARCH: "search",
    ORDERS: "orders",
  } as const;
  
  export type RouteNames = (typeof ROUTES)[keyof typeof ROUTES];
  