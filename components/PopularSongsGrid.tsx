import { StyleSheet, View } from "react-native";
import VerticalSongCard from "./VerticalSongCard";
import { Song } from "./HorizontalSongCard";

type SongGridProps = {
  songs: Song[];
};

const PopularSongsGrid = ({ songs }: SongGridProps) => {
  return (
    <View style={popularSongsStyles.gridContainer}>
      {songs.map((song) => (
        <VerticalSongCard key={song.id} song={song} />
      ))}
    </View>
  );
};

const popularSongsStyles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

export default PopularSongsGrid;
