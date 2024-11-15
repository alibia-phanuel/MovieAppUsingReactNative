import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
export default function HomeScreen() {
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView>
        <StatusBar style="light" />
        <View>
          <Text className="text-red-400">Home</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
