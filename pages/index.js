import Head from 'next/head'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Musiryx - Dashboard</title>
        <meta name="Musiryx" content="Music App inspired on Spotify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard/>
    </div>
  )
}
