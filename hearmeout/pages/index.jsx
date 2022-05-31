import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return(
    <>
    <Head>
        <title>Hear Me Out</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="flex items-center justify-center h-screen w-screen">
      <h1>Hello world!</h1>
    </div>
    </>
  )
}
