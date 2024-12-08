import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TrackPlayer from "react-native-track-player";

interface Track {
  url: string;
  title: string;
  artist: string;
  album?: string;
  genre?: string;
  date?: string;
  artwork: string;
  duration?: number;
}

interface PlayerStore {
  currentPlayingTrack: Track | null;
  allTracks: Track[];
  isShuffling: boolean;
  isLooping: boolean;
  clearCurrentPlayingTrack: () => Promise<void>;
  setCurrentPlayingTrack: (track: Track) => Promise<void>;
  setCurrentTrack: (track: Track) => Promise<void>;
  setIsShuffling: (shuffling: boolean) => Promise<void>;
  setIsLooping: (looping: boolean) => Promise<void>;
  playTrack: (track: Track) => Promise<void>;
  pauseTrack: () => Promise<void>;
  nextTrack: () => Promise<void>;
  previousTrack: () => Promise<void>;
}

export const usePlayerStore = create<PlayerStore>()(
  persist(
    (set, get) => ({
      currentPlayingTrack: null,
      allTracks: [],
      isShuffling: false,
      isLooping: false,
      clearCurrentPlayingTrack: async () => {
        set({ currentPlayingTrack: null });
      },
      setCurrentPlayingTrack: async (track: Track) => {
        set({ currentPlayingTrack: track });
        await TrackPlayer.add(track);
      },
      setCurrentTrack: async (track: Track) => {},
      setIsShuffling: async (shuffling: boolean) => {
        set({ isShuffling: shuffling });
      },
      setIsLooping: async (looping: boolean) => {
        set({ isLooping: looping });
      },
      playTrack: async (track: Track) => {
        set({ currentPlayingTrack: track });
        TrackPlayer.play();
      },
      pauseTrack: async () => {},
      nextTrack: async () => {},
      previousTrack: async () => {},
    }),
    {
      name: "moodify-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
