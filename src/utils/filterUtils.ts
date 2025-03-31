export enum FilterProperty {
  NAME = 'name',
  TICKER = 'ticker',
}

export const filterBySearchTerm = <T extends Record<string, any>>(
  items: T[] | undefined,
  searchTerm: string,
  filterProperty: FilterProperty
): T[] | undefined => {
  if (!items) return undefined;
  
  return items.filter((item) =>
    String(item[filterProperty]).toLowerCase().includes(searchTerm.toLowerCase())
  );
};