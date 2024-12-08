import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { usePlayerStore } from "@/store/usePlayerStore";
import { isPlaying } from "react-native-track-player";

const MiniPlayer = () => {
  const track = {
    id: "1",
    url: "https://old.downloadming.co/2016a/bollywood%20mp3/M.S%20Dhoni%20-%20Kaun%20Tujhe%20-%20Armaan%20Malik%20Version%20(2017)/01%20-%20Kaun%20Tujhe%20(Armaan%20Malik%20Version)%20(320%20Kbps).mp3", // Replace with actual audio URL
    title: "Kaun Tujhe",
    artist: "Armaan Malik",
  };

  const {
    currentPlayingTrack,
    pauseTrack,
    isPlaying,
    setCurrentPlayingTrack,
    playTrack,
  } = usePlayerStore();

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
          <Text style={styles.title}>{currentPlayingTrack?.title}</Text>
          <Text style={styles.artist}>{currentPlayingTrack?.artist}</Text>
        </View>
        <View style={styles.controls}>
          <TouchableOpacity>
            <Feather name="skip-back" size={24} color="#fff" />
          </TouchableOpacity>
          {!isPlaying ? (
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => {
                setCurrentPlayingTrack(track);
                playTrack(track);
              }}
            >
              <Feather name="play" size={24} color="#fff" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => {
                pauseTrack();
              }}
            >
              <Feather name="pause" size={24} color="#fff" />
            </TouchableOpacity>
          )}
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
