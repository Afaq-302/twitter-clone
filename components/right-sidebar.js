"use client"

/* ──────────────────────────────────────────────────────────
   Upgraded RightSidebar  •  Twitter-style dark UI clone
   – refined palette, tighter type hierarchy, focus-ring & hover motion
   – keeps original logic / markup structure recognisable
───────────────────────────────────────────────────────────*/

import { useState } from "react"
import { Search, CheckCircle2 } from "lucide-react"
import { mockTrends, mockSuggestions } from "../lib/mock-data"

export default function RightSidebar() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <aside className="h-full overflow-y-auto px-5 py-4 xl:w-[350px]">
      {/* 🔍 SEARCH */}
      <div className="mb-6">
        <label htmlFor="sidebar-search" className="sr-only">
          Search Twitter
        </label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            id="sidebar-search"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full bg-[#202327] py-3 pl-12 pr-4 text-sm text-slate-100 placeholder-slate-500 focus:border-transparent focus:ring-2 focus:ring-sky-500"
          />
        </div>
      </div>

      {/* 🔥 TRENDS */}
      <section className="mb-6 rounded-2xl bg-[#16181C]">
        <h2 className="px-4 pt-4 text-lg font-extrabold leading-6 text-slate-50">
          What's happening
        </h2>

        <ul className="space-y-[2px] pb-1 pt-3">
          {mockTrends.slice(0, 5).map((trend, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 transition-all duration-100 hover:bg-[#1D1F23]"
            >
              <p className="text-xs text-slate-400">Trending in Technology</p>
              <p className="truncate font-bold text-slate-100">
                {trend.topic}
              </p>
              <p className="text-xs text-slate-400">{trend.tweets} Tweets</p>
            </li>
          ))}
        </ul>

        <button className="w-full rounded-b-2xl px-4 py-3 text-left text-sm font-medium text-sky-400 hover:bg-[#1D1F23] hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500">
          Show more
        </button>
      </section>

      {/* 👥 WHO TO FOLLOW */}
      <section className="rounded-2xl bg-[#16181C]">
        <h2 className="px-4 pt-4 text-lg font-extrabold leading-6 text-slate-50">
          Who to follow
        </h2>

        <ul className="space-y-[2px] pb-1 pt-3">
          {mockSuggestions.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between px-4 py-3 transition-colors duration-100 hover:bg-[#1D1F23]"
            >
              {/* avatar + info */}
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.displayName}
                  className="h-10 w-10 flex-shrink-0 rounded-full"
                />

                <div className="min-w-0">
                  <p className="flex items-center gap-[2px] font-bold leading-none text-slate-100">
                    {user.displayName}
                    {user.verified && (
                      <CheckCircle2 className="h-4 w-4 text-sky-400" />
                    )}
                  </p>
                  <p className="truncate text-xs text-slate-400">
                    @{user.username}
                  </p>
                </div>
              </div>

              {/* FOLLOW CTA */}
              <button
                className="rounded-full bg-slate-50 px-4 py-1.5 text-sm font-bold text-slate-900 transition-transform duration-100 hover:bg-slate-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                Follow
              </button>
            </li>
          ))}
        </ul>

        <button className="w-full rounded-b-2xl px-4 py-3 text-left text-sm font-medium text-sky-400 hover:bg-[#1D1F23] hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500">
          Show more
        </button>
      </section>
    </aside>
  )
}
