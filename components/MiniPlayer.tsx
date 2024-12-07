import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Feather } from "@expo/vector-icons";

const MiniPlayer = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={["rgba(75, 75, 75, 0.9)", "rgba(45, 45, 45, 1)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.content}>
        <Image
          source={{ uri: "https://picsum.photos/60" }}
          style={styles.albumArt}
        />
        <View style={styles.songInfo}>
          <Text style={styles.title}>Song Title</Text>
          <Text style={styles.artist}>Artist Name</Text>
        </View>
        <View style={styles.controls}>
          <TouchableOpacity>
            <Feather name="skip-back" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton}>
            <Feather name="play" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="skip-forward" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  albumArt: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
  songInfo: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  artist: {
    color: "#ccc",
    fontSize: 14,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  playButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MiniPlayer;
