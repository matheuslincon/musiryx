import SpotifyWebApi from 'spotify-web-api-node';
import Leftbar from './Leftbar';
import Body from './Body';
import Rightbar from './Rightbar';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

function Dashboard() {
  return (
    <main>
      <Leftbar/>
      <Body spotifyApi={spotifyApi}/>
      <Rightbar/>
    </main>
  )
}

export default Dashboard
