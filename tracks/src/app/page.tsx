'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

interface Track {
  id: Number
  name: String
}

export default function Home() {

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const response = await fetch("https://api.npoint.io/725df6bf46634eb04dc8");
      const data = await response.json();
      setTracks(data.results)

    }
    
    fetchTracks();
  }, []);

    return (
      <ul>
        {tracks.map((track: Track) => {
          return <li key={track.name}>{track.name}</li>
        })}
      </ul>
    )
}
