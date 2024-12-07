import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Song = {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
};

type VerticalSongCardProps = {
  song: Song;
};

const VerticalSongCard = ({ song }: VerticalSongCardProps) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <LinearGradient
        colors={["rgba(29, 185, 84, 0.4)", "rgba(20, 20, 20, 0.95)"]}
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Image source={{ uri: song.imageUrl }} style={styles.albumArt} />
        <View style={styles.songInfo}>
          <Text style={styles.songTitle} numberOfLines={1}>
            {song.title}
          </Text>
          <Text style={styles.artistName} numberOfLines={1}>
            {song.artist}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "48%",
    borderRadius: 5,
    overflow: "hidden",
  },
  card: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },
  albumArt: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  songInfo: {
    marginLeft: 8,
    flex: 1,
  },
  songTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  artistName: {
    fontSize: 12,
    color: "#e6e6e6",
  },
});

export default VerticalSongCard;
