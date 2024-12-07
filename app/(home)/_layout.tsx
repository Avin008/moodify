import { Tabs } from "expo-router";
import CustomTabBar from "@/components/CustomTabBar";
import { View } from "react-native";
import MiniPlayer from "@/components/MiniPlayer";

const Layout = () => {
  return (
    <Tabs
      tabBar={(tabBarProps) => {
        return (
          <View>
            <MiniPlayer />
            <CustomTabBar tabBarProps={tabBarProps} />
          </View>
        );
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <Tabs.Screen
        name="mood"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
    </Tabs>
  );
};

export default Layout;
