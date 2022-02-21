import Head from 'next/head';
import PreapprovedForm from '../components/preapproved/PreapprovedForm';
import Preview from '../components/preapproved/Preview';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-wrap w-full">
        <Preview />
        <PreapprovedForm />
      </main>
    </div>
  )
}
