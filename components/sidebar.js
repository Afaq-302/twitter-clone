"use client"

/* ──────────────────────────────────────────────────────────
   Sidebar – Twitter-style polished version
   • active pill highlight, hover scale
   • gradient “Tweet” CTA, focus rings
   • smarter active match for dynamic profile routes
───────────────────────────────────────────────────────────*/

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  MoreHorizontal,
  Twitter,
} from "lucide-react"

const nav = [
  { name: "Home", href: "/", icon: Home },
  { name: "Explore", href: "/explore", icon: Search },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Messages", href: "/messages", icon: Mail },
  { name: "Bookmarks", href: "/bookmarks", icon: Bookmark },
  { name: "Profile", href: "/profile/afaq_dev", icon: User },
  { name: "More", href: "/more", icon: MoreHorizontal },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex h-full flex-col gap-8 p-6 lg:p-8">
      {/* logo */}
      <Link
        href="/"
        aria-label="Twitter home"
        className="flex h-10 w-10 items-center justify-center rounded-full text-sky-400 transition-transform duration-100 hover:scale-105"
      >
        <Twitter className="h-7 w-7" />
      </Link>

      {/* nav links */}
      <nav className="flex-1">
        <ul className="space-y-1.5">
          {nav.map(({ name, href, icon: Icon }) => {
            const isActive =
              pathname === href ||
              (href.startsWith("/profile") && pathname.startsWith("/profile"))
            return (
              <li key={name}>
                <Link
                  href={href}
                  aria-label={name}
                  className={`group flex items-center gap-5 rounded-full px-5 py-3 text-lg font-medium transition-colors duration-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500
                    ${
                      isActive
                        ? "bg-[#202327] text-sky-400"
                        : "text-slate-200 hover:bg-[#1d1f23]"
                    }`}
                >
                  <Icon
                    className={`h-6 w-6 transition-transform ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}
                  />
                  <span className="hidden xl:inline">{name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* tweet CTA */}
      <button
        aria-label="Compose Tweet"
        className="w-full rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 py-3 text-center text-lg font-bold text-white shadow-md transition-transform duration-100 hover:brightness-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-fuchsia-500"
      >
        <span className="hidden xl:inline">Tweet</span>
        <span className="xl:hidden text-2xl leading-none">+</span>
      </button>

      {/* user card */}
      <button
        aria-label="Account menu"
        className="flex items-center gap-3 rounded-full p-3 transition-colors hover:bg-[#1d1f23] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500"
      >
        <img
          src="https://images.unsplash.com/photo-1728257679663-24eec7b8c203?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="John Doe avatar"
          className="h-11 w-11 rounded-full"
        />
        <div className="hidden flex-1 xl:block">
          <p className="font-semibold text-slate-100">Afaq</p>
          <p className="text-sm text-slate-400">@afaq_dev</p>
        </div>
        <MoreHorizontal className="hidden h-5 w-5 text-slate-400 xl:block" />
      </button>
    </aside>
  )
}
