import { SortOrder } from "mongoose";
import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface gameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (word: string) => void;
  setGenre: (genresID: number) => void;
  setPlatform: (platformID: number) => void;
  setSort: (SortOrder: string) => void;
}

export const useGameQueryStore = create<gameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (word) => set({ gameQuery: { searchText: word } }),
  setGenre: (genID) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId: genID } })),
  setPlatform: (platID) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId: platID } })),
  setSort: (sort) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder: sort } })),
}));
