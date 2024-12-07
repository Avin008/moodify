import { ScrollView, StyleSheet } from "react-native";
import HorizontalSongCard, { Song } from "./HorizontalSongCard";

type SongGridProps = {
  songs: Song[];
};

const RecentlyPlayedSection = ({ songs }: SongGridProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={recentlyPlayedStyles.container}
    >
      {songs.map((song) => (
        <HorizontalSongCard key={song.id} song={song} />
      ))}
    </ScrollView>
  );
};

const recentlyPlayedStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default RecentlyPlayedSection;
