import { getProviders, useSession, signIn } from 'next-auth/react';
import Head from 'next/head';
import Image from "next/image";
import LoginImg from '../../public/login.svg';

function Login({ providers }) {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>Musiryx - Login</title>
        <meta name="Musiryx" content="Music App inspired on Spotify" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Image
        src={LoginImg}
        alt="Musiryx"
        height={250}
        width={600}
        objectFit="contain"
        className="animate-pulse"
      />
      {Object.values(providers).map((provider) => (
        <div  key={provider.id}>
          <button className="text-white py-4 px-6 rounded-full bg-[#7F00FF] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#7F00FF]"
          onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
