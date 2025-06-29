"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from "lucide-react"
import { getUserById } from "../lib/mock-data"

export default function TweetCard({ tweet }) {
  const [liked, setLiked] = useState(false)
  const [retweeted, setRetweeted] = useState(false)
  const [likeCount, setLikeCount] = useState(tweet.likes)
  const [retweetCount, setRetweetCount] = useState(tweet.retweets)

  const user = getUserById(tweet.userId)

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  const handleRetweet = () => {
    setRetweeted(!retweeted)
    setRetweetCount(retweeted ? retweetCount - 1 : retweetCount + 1)
  }

  if (!user) return null

  return (
    <article className="border-b border-gray-800 p-4 hover:bg-gray-950/50 transition-colors cursor-pointer">
      <div className="flex space-x-3">
        <Link href={`/profile/${user.username}`}>
          <img
            src={user.avatar || "/placeholder.svg"}
            alt={user.displayName}
            className="h-12 w-12 rounded-full hover:opacity-90 transition-opacity"
          />
        </Link>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <Link href={`/profile/${user.username}`} className="hover:underline">
              <span className="font-bold">{user.displayName}</span>
            </Link>
            {user.verified && (
              <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span className="text-gray-500">@{user.username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{tweet.timestamp}</span>
            <div className="ml-auto">
              <button className="hover:bg-gray-800 p-2 rounded-full">
                <MoreHorizontal className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="mb-3">
            <p className="text-white whitespace-pre-wrap">{tweet.content}</p>
            {tweet.image && (
              <div className="mt-3 rounded-2xl overflow-hidden border border-gray-700">
                <img src={tweet.image || "/placeholder.svg"} alt="Tweet image" className="w-full h-auto" />
              </div>
            )}
          </div>

          <div className="flex items-center justify-between max-w-md">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 group">
              <div className="p-2 rounded-full group-hover:bg-blue-400/10">
                <MessageCircle className="h-4 w-4" />
              </div>
              <span className="text-sm">{tweet.replies}</span>
            </button>

            <button
              onClick={handleRetweet}
              className={`flex items-center space-x-2 hover:text-green-400 group ${
                retweeted ? "text-green-400" : "text-gray-500"
              }`}
            >
              <div className="p-2 rounded-full group-hover:bg-green-400/10">
                <Repeat2 className="h-4 w-4" />
              </div>
              <span className="text-sm">{retweetCount}</span>
            </button>

            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 hover:text-red-500 group ${
                liked ? "text-red-500" : "text-gray-500"
              }`}
            >
              <div className="p-2 rounded-full group-hover:bg-red-500/10">
                <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
              </div>
              <span className="text-sm">{likeCount}</span>
            </button>

            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 group">
              <div className="p-2 rounded-full group-hover:bg-blue-400/10">
                <Share className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
