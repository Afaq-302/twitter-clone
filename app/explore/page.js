"use client"

/* ──────────────────────────────────────────────────────────
   ExplorePage – polished Twitter-style UI
   • sticky header + search field
   • refined palette (#16181C / #202327)
   • hover pills & focus rings
   • trending list tap-ready on mobile
───────────────────────────────────────────────────────────*/

import { useState } from "react"
import Layout from "../../components/layout"
import Header from "../../components/header"
import TweetCard from "../../components/tweet-card"
import { searchTweets, mockTrends } from "../../lib/mock-data"
import { Search, TrendingUp } from "lucide-react"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  const runSearch = (query) => {
    const trimmed = query.trim()
    if (!trimmed) return
    setIsSearching(true)
    setSearchResults(searchTweets(trimmed))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    runSearch(searchQuery)
  }

  const handleTrendClick = (trend) => {
    const q = trend.replace("#", "")
    setSearchQuery(q)
    runSearch(q)
  }

  return (
    <Layout>
      <div className="min-h-screen">
        {/* sticky page header */}
        <Header title="Explore" />

        {/* 🔍 sticky search bar */}
        <form
          onSubmit={handleSearch}
          className="sticky top-[53px] z-10 flex items-center border-b border-[#2F3336] bg-black/70 px-4 py-3 backdrop-blur"
        >
          <label htmlFor="explore-search" className="sr-only">
            Search Twitter
          </label>
          <Search className="pointer-events-none absolute ml-6 h-5 w-5 text-slate-400" />
          <input
            id="explore-search"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full bg-[#202327] py-3 pl-12 pr-4 text-sm text-slate-100 placeholder-slate-500 focus:border-transparent focus:ring-2 focus:ring-sky-500"
          />
        </form>

        {/* results OR trends */}
        {isSearching ? (
          <>
            <div className="border-b border-[#2F3336] px-4 py-3">
              <h2 className="text-lg font-extrabold leading-6">
                Search results for “{searchQuery}”
              </h2>
              <p className="text-sm text-slate-400">
                {searchResults.length} results
              </p>
            </div>

            {searchResults.length ? (
              searchResults.map((t) => <TweetCard key={t.id} tweet={t} />)
            ) : (
              <p className="px-4 py-10 text-center text-slate-400">
                No tweets found for “{searchQuery}”
              </p>
            )}
          </>
        ) : (
          <section className="px-4 py-3">
            {/* Trending header */}
            <div className="mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-sky-400" />
              <h2 className="text-lg font-extrabold leading-6">
                Trending for you
              </h2>
            </div>

            {/* Trending list */}
            <ul className="space-y-[2px]">
              {mockTrends.map((trend, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleTrendClick(trend.topic)}
                    className="w-full space-y-[2px] rounded-xl px-4 py-3 text-left transition-colors hover:bg-[#1D1F23] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500"
                  >
                    <p className="text-xs text-slate-400">
                      Trending in Technology
                    </p>
                    <p className="font-bold text-slate-100">{trend.topic}</p>
                    <p className="text-xs text-slate-400">
                      {trend.tweets} Tweets
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </Layout>
  )
}
