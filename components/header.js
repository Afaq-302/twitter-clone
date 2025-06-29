"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Header({ title, subtitle, showBackButton = false }) {
  const router = useRouter()

  return (
    <header className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4 z-10">
      <div className="flex items-center space-x-4">
        {showBackButton && (
          <button onClick={() => router.back()} className="hover:bg-gray-800 p-2 rounded-full transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>
        )}
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
        </div>
      </div>
    </header>
  )
}
