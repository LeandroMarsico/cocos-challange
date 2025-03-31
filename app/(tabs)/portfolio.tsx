import EmptyState from "@/src/components/emptyState/EmptyState";
import GenericError from "@/src/components/genericError/GenericError";
import { Header } from "@/src/components/header/Header";
import Loading from "@/src/components/loading/Loading";
import PortfolioItem from "@/src/components/portfolioItem/PortfolioItem";
import Screen from "@/src/components/screenComponent/Screen";
import { usePortfolio } from "@/src/hooks/usePortfolio.ts";
import { FilterProperty, filterBySearchTerm } from "@/src/utils/filterUtils";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

const PortfolioScreen = () => {
  const { portfolio, isLoading, error, refetch } = usePortfolio();
  const [searchTerm, setSearchTerm] = useState<string>("");  
  const filteredPortfolio = filterBySearchTerm(portfolio, searchTerm, FilterProperty.TICKER);
  
  return (
    <Screen>
      <Loading showLoader={isLoading} />
      {error && <GenericError onRetry={() => refetch()} />}
      {!isLoading && !error && (
        <FlatList
          data={filteredPortfolio}
          keyExtractor={(item, index) => `${item.instrument_id}-${index}`}
          renderItem={({ item }) => <PortfolioItem item={item} />}
          ListHeaderComponent={
              <Header
                title="Listado de Portfolios"
                placeholder="Buscar por ticker"
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
          }
          stickyHeaderIndices={[0]} 
          contentContainerStyle={styles.listContainer}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            isLoading ? (
              <Loading showLoader={isLoading} />
            ) : (
              <EmptyState />
            )
          }
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 50,
  },
});

export default PortfolioScreen;
