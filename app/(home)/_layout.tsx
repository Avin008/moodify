import { Tabs } from "expo-router";
import CustomTabBar from "@/components/CustomTabBar";
import { LogBox, Platform, View } from "react-native";
import MiniPlayer from "@/components/MiniPlayer";
import { useEffect } from "react";
import TrackPlayer from "react-native-track-player";

const Layout = () => {
  useEffect(() => {
    Platform.OS === "android" && TrackPlayer.setupPlayer();
  }, []);
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
        }}
      />
      <Tabs.Screen
        name="mood"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default Layout;
