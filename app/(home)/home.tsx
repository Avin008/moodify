import { Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PopularSongsGrid from "@/components/PopularSongsGrid";
import RecentlyPlayedSection from "@/components/RecentlyPlayedSection";

// Types
type Song = {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
};

// Mock Data
const DUMMY_SONGS: Song[] = [
  {
    id: "1",
    title: "Song Title 1",
    artist: "Artist 1",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: "2",
    title: "Song Title 2",
    artist: "Artist 2",
    imageUrl: "https://picsum.photos/201",
  },
  {
    id: "3",
    title: "Song Title 3",
    artist: "Artist 3",
    imageUrl: "https://picsum.photos/202",
  },
  {
    id: "4",
    title: "Song Title 4",
    artist: "Artist 4",
    imageUrl: "https://picsum.photos/203",
  },
  {
    id: "5",
    title: "Song Title 5",
    artist: "Artist 5",
    imageUrl: "https://picsum.photos/204",
  },
  {
    id: "6",
    title: "Song Title 6",
    artist: "Artist 6",
    imageUrl: "https://picsum.photos/205",
  },
];

const Home = () => {
  return (
    <SafeAreaView style={homeStyles.container}>
      <ScrollView style={homeStyles.scrollView}>
        <Text style={[homeStyles.header, homeStyles.secondHeader]}>
          Popular Songs
        </Text>
        <PopularSongsGrid songs={DUMMY_SONGS} />

        <Text style={homeStyles.header}>Recently Played</Text>
        <RecentlyPlayedSection songs={DUMMY_SONGS} />
      </ScrollView>
    </SafeAreaView>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  secondHeader: {
    marginTop: 20,
  },
});

export default Home;
