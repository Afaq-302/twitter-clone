"use client"

/* ──────────────────────────────────────────────────────────
   NotificationsPage – Twitter-style notifications feed
   • mock data for likes, follows, mentions, retweets
   • pill tabs (All / Mentions) w/ active highlight
   • palette + interaction consistent with rest of clone
───────────────────────────────────────────────────────────*/

import { useState } from "react"
import Layout from "../../components/layout"
import Header from "../../components/header"
import Link from "next/link"
import {
  Heart,
  Repeat2,
  UserPlus,
  AtSign,
  MessageCircle,
} from "lucide-react"

/* 🔧 mock notifications */
const mockNotifications = [
  {
    id: 1,
    type: "like",
    actor: {
      name: "Alice",
      username: "alice",
      avatar: "/placeholder.svg",
    },
    tweetSnippet: "Excited about the new feature!",
    time: "2h",
  },
  {
    id: 2,
    type: "retweet",
    actor: {
      name: "Bob",
      username: "bob_the_dev",
      avatar: "/placeholder.svg",
    },
    tweetSnippet: "Check out my latest project.",
    time: "5h",
  },
  {
    id: 3,
    type: "follow",
    actor: {
      name: "Charlie",
      username: "charlie",
      avatar: "/placeholder.svg",
    },
    time: "1d",
  },
  {
    id: 4,
    type: "mention",
    actor: {
      name: "Dana",
      username: "dana_designs",
      avatar: "/placeholder.svg",
    },
    tweetSnippet: "@you Loved your recent post!",
    time: "3d",
  },
]

/* 🎨 type → icon + color */
const typeMeta = {
  like: { icon: Heart, color: "text-rose-500", bg: "bg-rose-500/10" },
  retweet: { icon: Repeat2, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  follow: { icon: UserPlus, color: "text-sky-400", bg: "bg-sky-400/10" },
  mention: { icon: AtSign, color: "text-indigo-400", bg: "bg-indigo-400/10" },
}

export default function NotificationsPage() {
  const [tab, setTab] = useState("all")

  const filtered =
    tab === "mentions"
      ? mockNotifications.filter((n) => n.type === "mention")
      : mockNotifications

  return (
    <Layout>
      <div className="min-h-screen">
        <Header title="Notifications" />

        {/* Tabs */}
        <div className="flex border-b border-[#2F3336]">
          {["all", "mentions"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-3 text-center text-sm font-bold capitalize transition-colors ${
                tab === t
                  ? "border-b-4 border-sky-400 text-slate-100"
                  : "text-slate-400 hover:bg-[#1D1F23]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Feed */}
        {filtered.length ? (
          filtered.map((n) => {
            const meta = typeMeta[n.type] || {}
            const Icon = meta.icon || MessageCircle
            return (
              <article
                key={n.id}
                className="flex gap-4 border-b border-[#2F3336] px-4 py-3 transition-colors hover:bg-[#1D1F23]/80"
              >
                {/* icon bubble */}
                <div
                  className={`mt-1 flex h-9 w-9 items-center justify-center rounded-full ${meta.bg}`}
                >
                  <Icon className={`h-5 w-5 ${meta.color}`} />
                </div>

                {/* main content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <img
                      src={n.actor.avatar}
                      alt={n.actor.name}
                      className="h-8 w-8 rounded-full"
                    />
                    <Link
                      href={`/profile/${n.actor.username}`}
                      className="font-bold text-slate-100 hover:underline"
                    >
                      {n.actor.name}
                    </Link>
                    <span className="text-sm text-slate-400">@{n.actor.username}</span>
                    <span className="text-sm text-slate-400">· {n.time}</span>
                  </div>

                  {/* message */}
                  <p className="mt-1 text-slate-100">
                    {n.type === "like" && "liked your Tweet"}
                    {n.type === "retweet" && "retweeted your Tweet"}
                    {n.type === "follow" && "followed you"}
                    {n.type === "mention" && "mentioned you"}
                  </p>

                  {n.tweetSnippet && (
                    <p className="mt-2 truncate rounded-xl border border-[#2F3336] bg-[#202327] px-4 py-3 text-slate-100">
                      {n.tweetSnippet}
                    </p>
                  )}
                </div>
              </article>
            )
          })
        ) : (
          <p className="px-4 py-10 text-center text-slate-400">
            Nothing here yet.
          </p>
        )}
      </div>
    </Layout>
  )
}
