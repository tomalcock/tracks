"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Track = {
  id: number;
  name: string;
  artist: Artist;
  duration: number;
};

type Artist = {
  id: string;
  name: string;
  image: string;
};

type LikedTracksContextType = {
  likedTracks: Track[];
  LikedTracksIds: number[];
  addLikedTrack: (track: Track) => void;
};

const LikedTracksContext = createContext<LikedTracksContextType | undefined>(
  undefined
);

type LikedTracksProviderProps = {
  children: ReactNode;
};

let LikedTracksIds = [0];

export const LikedTracksProvider: React.FC<LikedTracksProviderProps> = ({
  children,
}) => {
  const [likedTracks, setLikedTracks] = useState<Track[]>([]);

  const addLikedTrack = (track: Track) => {
    setLikedTracks((prevLikedTracks) => [...prevLikedTracks, track]);
    LikedTracksIds.push(track.id);
  };

  return (
    <LikedTracksContext.Provider
      value={{ likedTracks, LikedTracksIds, addLikedTrack }}
    >
      {children}
    </LikedTracksContext.Provider>
  );
};

export const useLikedTracks = (): LikedTracksContextType => {
  const context = useContext(LikedTracksContext);

  if (!context) {
    throw new Error("useLikedTracks must be used within a LikedTracksProvider");
  }

  return context;
};
