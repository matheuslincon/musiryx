import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Dashboard from '../components/Dashboard';
import Loader from "../components/Loader";

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/login");
    },
  });

  if(status === "loading") {
    return <Loader/>;
  }

  return (
    <div>
      <Head>
        <title>Musiryx - Dashboard</title>
        <meta name="Musiryx" content="Music App inspired on Spotify" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Dashboard/>
    </div>
  )
}
