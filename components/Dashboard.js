import SpotifyWebApi from 'spotify-web-api-node';
import Leftbar from './Leftbar';
import Body from './Body';
import Rightbar from './Rightbar';
import Player from './Player'
import { useRecoilState } from 'recoil';
import { playingTrackState } from '../atoms/playerAtom';
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});


function Dashboard() {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };

  return (
    <main className="flex min-h-screen bg-black lg:pb-24">
      <Leftbar/>
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack}/>
      <Rightbar spotifyApi={spotifyApi} chooseTrack={chooseTrack}/>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Player
          accessToken={accessToken}
          trackUri={playingTrack.uri}
        />
      </div>
    </main>
  )
}

export default Dashboard
