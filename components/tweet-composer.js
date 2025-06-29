"use client"

/* ──────────────────────────────────────────────────────────
   Enhanced TweetComposer – Twitter dark-UI style
   • refined palette, gradient Tweet CTA, icon hover flair
   • focus rings, remaining-char warning tint
───────────────────────────────────────────────────────────*/

import { useState } from "react"
import { ImageIcon, Smile, Calendar, MapPin } from "lucide-react"

export default function TweetComposer({ onTweet }) {
  const [content, setContent] = useState("")
  const maxLength = 280
  const remainingChars = maxLength - content.length

  const handleSubmit = (e) => {
    e.preventDefault()
    if (content.trim() && content.length <= maxLength) {
      onTweet(content)
      setContent("")
    }
  }

  const iconBtns = [
    { label: "Add media", icon: ImageIcon },
    { label: "Add emoji", icon: Smile },
    { label: "Schedule tweet", icon: Calendar },
    { label: "Add location", icon: MapPin },
  ]

  return (
    <section className="border-b border-[#2F3336] px-4 py-3">
      <div className="flex gap-4">
        {/* avatar – replace src when auth wired */}
        <img
          src="/placeholder.svg?height=48&width=48"
          alt="Your avatar"
          className="h-12 w-12 rounded-full"
        />

        <form onSubmit={handleSubmit} className="flex-1">
          {/* textarea */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            className="w-full resize-none border-none bg-transparent text-xl leading-6 text-slate-100 placeholder-slate-500 outline-none focus:ring-0"
            rows="3"
          />

          {/* action row */}
          <div className="mt-4 flex items-center justify-between">
            {/* icons */}
            <div className="flex gap-3 text-sky-400">
              {iconBtns.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="rounded-full p-2 transition-colors hover:bg-[#1D1F23]"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>

            {/* counter + tweet CTA */}
            <div className="flex items-center gap-4">
              <span
                className={`text-sm ${
                  remainingChars < 0
                    ? "text-rose-500"
                    : remainingChars < 20
                    ? "text-amber-400"
                    : "text-slate-400"
                }`}
              >
                {remainingChars}
              </span>

              <button
                type="submit"
                disabled={!content.trim() || content.length > maxLength}
                className="rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 px-6 py-2 text-sm font-bold text-white shadow-md transition-all duration-100 hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-fuchsia-500"
              >
                Tweet
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
