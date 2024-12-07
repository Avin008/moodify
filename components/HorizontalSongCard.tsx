import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export type Song = {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
};

type HorizontalSongCardProps = {
  song: Song;
};

const HorizontalSongCard = ({ song }: HorizontalSongCardProps) => {
  return (
    <TouchableOpacity style={styles.recentCardContainer}>
      <Image source={{ uri: song.imageUrl }} style={styles.recentAlbumArt} />
      <View style={styles.recentSongInfo}>
        <Text style={styles.songTitle} numberOfLines={1}>
          {song.title}
        </Text>
        <Text style={styles.artistName} numberOfLines={1}>
          {song.artist}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recentCardContainer: {
    marginRight: 16,
    width: 140,
  },
  recentAlbumArt: {
    width: 140,
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
  },
  recentSongInfo: {
    width: "100%",
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

export default HorizontalSongCard;
