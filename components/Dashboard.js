import SpotifyWebApi from 'spotify-web-api-node';
import Leftbar from './Leftbar';
import Body from './Body';
import Rightbar from './Rightbar';
import { useRecoilState } from 'recoil';
import { playingTrackState } from '../atoms/playerAtom';


const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});


function Dashboard() {
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };

  return (
    <main className="flex min-h-screen min-w-max bg-black lg:pb-24">
      <Leftbar/>
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack}/>
      <Rightbar/>
    </main>
  )
}

export default Dashboard
