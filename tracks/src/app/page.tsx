import NavBar from "@/components/Navbar";
import { LikedTracksProvider } from "../contexts/LikedTracksContext";
import App from "next/app";

export default function Home() {
  return (
    <div>
      <NavBar />
    </div>
  );
}
