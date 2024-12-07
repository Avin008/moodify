import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";

export default function Index() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (false) {
        router.replace("/(home)/home");
      } else {
        router.replace("/(auth)/auth");
      }
    }, 3000);

    // Create heartbeat animation sequence
    Animated.loop(
      Animated.sequence([
        // Beat out quickly
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 200,
          useNativeDriver: true,
        }),
        // Contract quickly
        Animated.timing(scaleAnim, {
          toValue: 0.9,
          duration: 200,
          useNativeDriver: true,
        }),
        // Back to normal
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        // Pause between beats
        Animated.delay(800),
      ])
    ).start();

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            {
              scale: scaleAnim,
            },
          ],
        }}
      >
        <Image
          style={styles.splash}
          source={require("@/assets/images/splash-icon.png")}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  splash: {
    width: 200,
    height: 200,
    marginTop: 50,
  },
});
