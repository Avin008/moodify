import { Feather } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { Animated, Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomTabBar({
  tabBarProps,
}: {
  tabBarProps: BottomTabBarProps;
}) {
  const { state, descriptors, navigation } = tabBarProps;

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;
        const isFocused = state.index === index;

        const [scale] = useState(new Animated.Value(1));

        const onPressIn = () => {
          Animated.spring(scale, {
            toValue: 0.9,
            useNativeDriver: true,
          }).start();
        };

        const onPressOut = () => {
          Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
          }).start();
        };

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Animated.View
            key={index}
            style={[styles.tabItem, { transform: [{ scale }] }]}
          >
            <Pressable
              onPress={onPress}
              onPressIn={onPressIn}
              onPressOut={onPressOut}
              style={styles.pressable}
            >
              {(() => {
                const iconConfig = {
                  home: { icon: "home", label: "Home" },
                  mood: { icon: "smile", label: "Mood" },
                  search: { icon: "search", label: "Search" },
                  library: { icon: "play", label: "Library" },
                };

                const config =
                  iconConfig[route.name as keyof typeof iconConfig];
                if (!config) return null;

                const { icon, label } = config;
                const color = isFocused ? "#fff" : "#666";

                return (
                  <View style={styles.iconContainer}>
                    <Feather
                      name={icon as "home" | "smile" | "search" | "play"}
                      size={24}
                      color={color}
                    />
                    <Text style={[styles.label, { color }]}>{label}</Text>
                  </View>
                );
              })()}
            </Pressable>
          </Animated.View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "transparent",
    height: 60,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  tabItem: {
    flex: 1,
  },
  pressable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
  },
});
