"use client"

/* ──────────────────────────────────────────────────────────
   MessagesPage – mobile-friendly DM UI
   • Mobile (< md): shows either the convo list *or* the chat pane
     – tap a thread ➜ chat pane slides in
     – Back arrow in chat header returns to list
   • Desktop (≥ md): two-column layout as before
───────────────────────────────────────────────────────────*/

import { useState } from "react"
import Layout from "../../components/layout"
import Header from "../../components/header"
import Link from "next/link"
import { Search, Send, ArrowLeft } from "lucide-react"

/* mock data */
const mockConversations = [
  {
    id: 1,
    partner: { name: "Alice", username: "alice", avatar: "/placeholder.svg" },
    messages: [
      { id: 1, fromMe: false, text: "Hey, did you see the update?", time: "2:05 PM" },
      { id: 2, fromMe: true, text: "Yes! Looks awesome 🔥", time: "2:10 PM" },
    ],
  },
  {
    id: 2,
    partner: { name: "Bob Dev", username: "bob_the_dev", avatar: "/placeholder.svg" },
    messages: [
      { id: 1, fromMe: false, text: "Got feedback on the PR?", time: "Yesterday" },
      { id: 2, fromMe: true, text: "Left comments just now", time: "Yesterday" },
    ],
  },
]

export default function MessagesPage() {
  const [activeId, setActiveId] = useState(mockConversations[0].id)
  const [view, setView] = useState("list") // "list" | "chat" — mobile only
  const [draft, setDraft] = useState("")

  const activeConv = mockConversations.find((c) => c.id === activeId)

  /* send */
  const sendMessage = () => {
    if (!draft.trim()) return
    activeConv.messages.push({
      id: Date.now(),
      fromMe: true,
      text: draft,
      time: "now",
    })
    setDraft("")
  }

  /* helpers */
  const openChat = (id) => {
    setActiveId(id)
    setView("chat")          // on mobile jump to chat pane
  }
  const backToList = () => setView("list")

  return (
    <Layout>
      <div className="flex min-h-screen flex-col">
        <Header title="Messages" />

        <div className="flex flex-1 flex-col md:flex-row">
          {/* LIST COLUMN */}
          <aside
            className={`flex h-[calc(100vh-53px)] flex-col border-b border-[#2F3336] md:w-1/3 md:border-b-0 md:border-r
              ${view === "chat" ? "hidden md:flex" : "flex"}`}
          >
            {/* search */}
            <div className="sticky top-[53px] z-10 bg-black/70 backdrop-blur">
              <div className="px-4 py-3">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search Direct Messages"
                    className="w-full rounded-full bg-[#202327] py-2 pl-10 pr-4 text-sm placeholder-slate-500 focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>
            </div>

            <ul className="flex-1 overflow-y-auto">
              {mockConversations.map((c) => {
                const last = c.messages.at(-1)?.text ?? ""
                const active = c.id === activeId
                return (
                  <li key={c.id}>
                    <button
                      onClick={() => openChat(c.id)}
                      className={`flex w-full gap-3 px-4 py-3 transition-colors ${
                        active ? "bg-[#1D1F23]" : "hover:bg-[#1D1F23]/80"
                      }`}
                    >
                      <img src={c.partner.avatar} alt="" className="h-12 w-12 rounded-full" />
                      <div className="min-w-0 flex-1 text-left">
                        <p className="truncate font-bold">{c.partner.name}</p>
                        <p className="truncate text-sm text-slate-400">{last}</p>
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>
          </aside>

          {/* CHAT COLUMN */}
          <section
            className={`flex h-[calc(100vh-53px)] flex-1 flex-col ${
              view === "list" ? "hidden md:flex" : "flex"
            }`}
          >
            {/* chat header */}
            <div className="sticky top-[53px] z-10 flex items-center gap-3 border-b border-[#2F3336] bg-black/70 px-4 py-3 backdrop-blur">
              {/* back arrow visible only on mobile */}
              <button
                onClick={backToList}
                aria-label="Back"
                className="md:hidden rounded-full p-2 hover:bg-[#1D1F23]"
              >
                <ArrowLeft className="h-5 w-5 text-slate-100" />
              </button>

              <img src={activeConv.partner.avatar} alt="" className="h-8 w-8 rounded-full" />
              <Link
                href={`/profile/${activeConv.partner.username}`}
                className="font-bold hover:underline"
              >
                {activeConv.partner.name}
              </Link>
              <span className="text-sm text-slate-400 hidden sm:inline">
                @{activeConv.partner.username}
              </span>
            </div>

            {/* messages */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              {activeConv.messages.map((m) => (
                <div
                  key={m.id}
                  className={`mb-4 flex ${m.fromMe ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs rounded-2xl px-4 py-2 text-sm ${
                      m.fromMe
                        ? "rounded-br-none bg-sky-500 text-white"
                        : "rounded-bl-none bg-[#202327] text-slate-100"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage()
              }}
              className="flex items-center gap-3 border-t border-[#2F3336] px-4 py-3"
            >
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Start a message"
                className="flex-1 rounded-full border border-[#2F3336] bg-transparent py-2 px-4 text-sm focus:ring-2 focus:ring-sky-500"
              />
              <button
                type="submit"
                disabled={!draft.trim()}
                aria-label="Send message"
                className="rounded-full p-2 text-sky-400 hover:bg-[#1D1F23] disabled:opacity-40"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </section>
        </div>
      </div>
    </Layout>
  )
}
