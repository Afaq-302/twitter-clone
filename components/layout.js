"use client"

/* ──────────────────────────────────────────────────────────
   Layout with Mobile Bottom-Nav  ➜ sidebar options on mobile
   • keeps desktop sidebars
   • adds Twitter-style bottom nav bar (md:hidden)
───────────────────────────────────────────────────────────*/

import Link from "next/link"
import { Home, Search, Bell, Mail } from "lucide-react"
import Sidebar from "./sidebar"
import RightSidebar from "./right-sidebar"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-slate-100">
      {/* central columns */}
      <div className="mx-auto flex max-w-6xl">
        {/* ◀ left sidebar (desktop) */}
        <div className="fixed hidden h-full w-64 md:block">
          <Sidebar />
        </div>

        {/* 📰 main feed */}
        <main className="flex-1 border-x border-[#2F3336] pb-16 md:ml-64 md:mr-80 md:pb-0">
          {children}
        </main>

        {/* ▶ right sidebar (lg) */}
        <div className="fixed right-0 hidden h-full w-80 lg:block">
          <RightSidebar />
        </div>
      </div>

      {/* 📱 bottom nav – mobile only */}
      <nav className="fixed inset-x-0 bottom-0 z-20 flex justify-around border-t border-[#2F3336] bg-black/80 py-2 backdrop-blur md:hidden">
        <Link
          href="/"
          aria-label="Home"
          className="rounded-full p-3 text-slate-400 transition-colors hover:bg-[#1D1F23] hover:text-sky-400"
        >
          <Home className="h-6 w-6" />
        </Link>
        <Link
          href="/explore"
          aria-label="Explore"
          className="rounded-full p-3 text-slate-400 transition-colors hover:bg-[#1D1F23] hover:text-sky-400"
        >
          <Search className="h-6 w-6" />
        </Link>
        <Link
          href="/notifications"
          aria-label="Notifications"
          className="rounded-full p-3 text-slate-400 transition-colors hover:bg-[#1D1F23] hover:text-sky-400"
        >
          <Bell className="h-6 w-6" />
        </Link>
        <Link
          href="/messages"
          aria-label="Messages"
          className="rounded-full p-3 text-slate-400 transition-colors hover:bg-[#1D1F23] hover:text-sky-400"
        >
          <Mail className="h-6 w-6" />
        </Link>
      </nav>
    </div>
  )
}
