import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Head>
        <title>Mint Ethicons</title>
        <Link rel="favicon" href="./favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Connect />
      <Footer />
    </>
  );
}