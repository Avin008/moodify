import { router } from "expo-router";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const Auth = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/spotify-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>Millions of Songs</Text>
      <Text style={styles.text}>Free on Spotify</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.googleButton}
        onPress={() => {
          router.push("/home");
        }}
      >
        <Image
          source={require("../../assets/images/google-logo.png")}
          style={styles.googleIcon}
        />
        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonText}>Continue with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 40,
    width: "100%",
  },
  googleIcon: {
    width: 30,
    height: 30,
  },
  buttonTextContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
});

export default Auth;
