import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'

interface Props {
  tweets: Tweet[]
}
const Home = ({tweets}: Props) => {
  return (
    <div className="mx-auto lg:max-w-6xl max-h-screen hidden-overflow">
      <Head>
        <title>ViBi Twitter</title>
      </Head>
      <main className='grid grid-cols-9'>
        {/* SideBar */}
        <Sidebar />
        {/* Feed */}
        <Feed tweets={tweets}/>
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets()
  console.log(":::::::::::  index.tsx  ::::::::::::::", tweets)

  return {
    props: {
      tweets,
    },
  }
}