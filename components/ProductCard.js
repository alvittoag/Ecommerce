import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/AntDesign";
import { useColorScheme } from "nativewind";
import { useState } from "react";

const ProductCard = ({ image, category, title, price, description }) => {
  const [count, setCount] = useState(1);
  const { colorScheme } = useColorScheme();
  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5">
      <View className="bg-white rounded-xl">
        <Image
          source={{ uri: image }}
          className="w-full h-72"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70">
          {category}
        </Text>
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>
        <View className="flex-row justify-between my-3">
          <View className="flex-row items-center gap-3">
            <Ionicons
              name="minuscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() =>
                setCount((count) => (count <= 1 ? setCount(1) : count - 1))
              }
            />
            <Text className="text-xl dark:text-white">{count}</Text>
            <Ionicons
              name="pluscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount((count) => count + 1)}
            />
          </View>
          <Text className="text-2xl font-extrabold dark:text-white">
            ${price * count}
          </Text>
        </View>
        <Text
          numberOfLines={2}
          className="text-sm text-black/60 dark:text-white/70"
        >
          {description}
        </Text>
        <TouchableOpacity className="bg-black dark:bg-white p-3 rounded-full flex-row justify-center w-10/12 self-center mt-5">
          <Text className="text-white dark:text-black font-bold">
            Add To Chart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
