import React, { useState } from "react";
import { useInstruments } from "@/src/hooks/useInstruments";
import { FlatList, StyleSheet, Text } from "react-native";
import Loading from "@/src/components/loading/Loading";
import GenericError from "@/src/components/genericError/GenericError";
import InstrumentItem from "@/src/components/instrumentItem/InstrumentItem";
import { Header } from "@/src/components/header/Header";
import EmptyState from "@/src/components/emptyState/EmptyState";
import { FilterProperty, filterBySearchTerm } from "@/src/utils/filterUtils";
import Screen from "@/src/components/screenComponent/Screen";

const Instruments = () => {
  const { instruments, isLoading, error, refetch } = useInstruments();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredInstruments = filterBySearchTerm(instruments, searchTerm, FilterProperty.NAME);

  return (
    <Screen>
      <Loading showLoader={isLoading} />
      {error && <GenericError onRetry={() => refetch()} />}
      {!isLoading && !error && (
        <FlatList
          data={filteredInstruments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <InstrumentItem item={item} />}
          stickyHeaderIndices={[0]} 
          ListHeaderComponent={
            <Header
            title="Listado de Instrumentos"
            placeholder="Buscar instrumento"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          }
          contentContainerStyle={styles.listContainer}
          keyboardShouldPersistTaps="handled"
          stickyHeaderHiddenOnScroll={false}
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
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 50,
  },
});

export default Instruments;
