import { useEffect, useState } from "react";
import ActiveItem from "@/src/components/activeItem/ActiveItem";
import EmptyState from "@/src/components/emptyState/EmptyState";
import GenericError from "@/src/components/genericError/GenericError";
import { Header } from "@/src/components/header/Header";
import Loading from "@/src/components/loading/Loading";
import Screen from "@/src/components/screenComponent/Screen";
import { useSearch } from "@/src/hooks/useSearch";
import { FlatList, StyleSheet } from "react-native";

const Search = ()  => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [showError, setShowError] = useState<boolean | null>(false);
  const { results, isLoading, error, isError, refetch } = useSearch(searchTerm);
  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  useEffect(() => {
    setShowError(isError)
  }, [isError])
  

  return (
    <Screen>
      <Loading showLoader={isLoading} />
      {showError && <GenericError onRetry={() => setShowError(false)} />}
      {!isLoading && !showError && (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ActiveItem item={item} />}
          contentContainerStyle={styles.listContainer}
          ListHeaderComponent={
            <Header
              title="Buscar Activos"
              placeholder="Ingrese el ticker o nombre"
              value={inputValue}
              onChangeText={setInputValue}
              onSearch={handleSearch}
              showButton={true}
            />
          }
          stickyHeaderIndices={[0]}
          ListEmptyComponent={
            <EmptyState />
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

export default Search;