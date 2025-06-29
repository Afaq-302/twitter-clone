"use client"

/* ──────────────────────────────────────────────────────────
   ProfilePage – fixes “params is now a Promise” warning
   • unwrap params with React.use()
   • otherwise identical to previous polished version
───────────────────────────────────────────────────────────*/

import { use, useState } from "react"
import Layout from "../../../components/layout"
import Header from "../../../components/header"
import TweetCard from "../../../components/tweet-card"
import { getUserByUsername, getTweetsByUserId } from "../../../lib/mock-data"
import { Calendar, MapPin, LinkIcon } from "lucide-react"

export default function ProfilePage({ params }) {
  /* ✅ unwrap promise-like params */
  const { username } = use(params)

  const user = getUserByUsername(username)
  const userTweets = user ? getTweetsByUserId(user.id) : []

  const [isFollowing, setFollowing] = useState(false)
  const handleFollow = () => setFollowing((f) => !f)

  if (!user) {
    return (
      <Layout>
        <div className="p-8 text-center">
          <h1 className="mb-4 text-2xl font-bold">User not found</h1>
          <p className="text-slate-400">
            The user you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="min-h-screen">
        <Header
          title={user.displayName}
          subtitle={`${userTweets.length} Tweets`}
          showBackButton
        />

        {/* 📸 Profile header */}
        <section className="relative">
          <div className="h-48 bg-[#202327]">
            <img
              src={user.banner || "/placeholder.svg"}
              alt="Profile banner"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="px-4 pb-4">
            <div className="-mt-16 mb-4 flex items-start justify-between">
              <img
                src={user.avatar || "/placeholder.svg"}
                alt={user.displayName}
                className="h-32 w-32 rounded-full border-4 border-black bg-black"
              />

              <button
                onClick={handleFollow}
                className={`mt-16 rounded-full px-6 py-2 text-sm font-bold shadow-md transition-all duration-100 focus-visible:outline focus-visible:outline-2 ${
                  isFollowing
                    ? "border border-slate-600 text-slate-100 hover:bg-[#1D1F23] focus-visible:outline-slate-500"
                    : "bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 text-white hover:brightness-110 active:scale-95 focus-visible:outline-fuchsia-500"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>

            <div className="animate-fade-in">
              <div className="mb-1 flex items-center gap-2">
                <h1 className="text-2xl font-extrabold leading-6">
                  {user.displayName}
                </h1>
                {user.verified && (
                  <svg
                    className="h-5 w-5 text-sky-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <p className="mb-3 text-slate-400">@{user.username}</p>
              <p className="mb-3 text-slate-100">{user.bio}</p>

              <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                {user.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {user.location}
                  </span>
                )}

                {user.website && (
                  <span className="flex items-center gap-1">
                    <LinkIcon className="h-4 w-4" />
                    <a
                      href={user.website}
                      className="text-sky-400 hover:underline"
                    >
                      {user.website.replace(/^https?:\/\//, "")}
                    </a>
                  </span>
                )}

                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Joined {user.joinDate}
                </span>
              </div>

              <div className="flex gap-6 text-sm">
                <span>
                  <span className="font-bold">
                    {user.following.toLocaleString()}
                  </span>{" "}
                  <span className="text-slate-400">Following</span>
                </span>
                <span>
                  <span className="font-bold">
                    {user.followers.toLocaleString()}
                  </span>{" "}
                  <span className="text-slate-400">Followers</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 📝 Tweets */}
        <div className="border-t border-[#2F3336]">
          {userTweets.length ? (
            userTweets.map((t) => <TweetCard key={t.id} tweet={t} />)
          ) : (
            <p className="px-4 py-10 text-center text-slate-400">
              No tweets yet.
            </p>
          )}
        </div>
      </div>

      {/* global fade-in keyframes */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(3px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.15s ease-out;
        }
      `}</style>
    </Layout>
  )
}
