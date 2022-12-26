import { View, Text, FlatList } from "react-native";
import { products } from "../products";
import ProductCard from "./ProductCard";

const ProductLists = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => <ProductCard {...item} />}
      contentContainerStyle={{ paddingHorizontal: 15 }}
    />
  );
};

export default ProductLists;
