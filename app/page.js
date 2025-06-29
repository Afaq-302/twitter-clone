"use client"

import { useState } from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import TweetComposer from "../components/tweet-composer"
import TweetCard from "../components/tweet-card"
import { mockTweets } from "../lib/mock-data"

export default function Home() {
  const [tweets, setTweets] = useState(mockTweets)

  const handleNewTweet = (content) => {
    const newTweet = {
      id: tweets.length + 1,
      userId: 1, // Current user (John Doe)
      content,
      timestamp: "now",
      likes: 0,
      retweets: 0,
      replies: 0,
      image: "",
    }
    setTweets([newTweet, ...tweets])
  }

  return (
    <Layout>
      <div className="min-h-screen">
        <Header title="Home" />
        <TweetComposer onTweet={handleNewTweet} />
        <div>
          {tweets.map((tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
