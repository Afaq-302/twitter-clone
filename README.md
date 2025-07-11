# 🐦 Twitter Clone &mdash; A Modern, Full-Stack Micro-Blogging App

> **Live demo:** _coming soon_  
> **Stack:** Next.js (App Router) • TypeScript • Tailwind CSS • lucide-react • NextAuth • MongoDB • Cloudinary

---

## 👋 Overview

**Twitter Clone** is a lean, full-stack recreation of core Twitter functionality.  
Post tweets, follow friends, like & reply in real time—all wrapped in a clean UI with password-less log-in.

---

## ✨ Key Features

- **Home Timeline**  
- **Compose Tweet**  
- **Like & Retweet**  
- **Follow System**  
- **Explore / Search**  
- **Notifications**  
- **Profile Pages**  
- **Mobile-First UI**

---

## ⚙️ Tech Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| **Framework** | **Next.js 14** | App Router, React Server Components, Server Actions |
| **Styling** | **Tailwind CSS** | Utility-first, with Radix UI primitives |
| **Icons** | **lucide-react** | Feather-style SVG icon set |
| **Auth** | **NextAuth.js** | Password-less login (email / OAuth) |
| **Database** | **MongoDB + Mongoose** | User, tweet & follow collections |
| **Media** | **Cloudinary** | Image upload & transformation |

---

## 🚀 Quick Start

```bash
# 1 · Clone & install
git clone https://github.com/your-username/twitter-clone.git
cd twitter-clone
pnpm install           # or npm / yarn

# 2 · Environment vars
cp .env.example .env   # then add: MONGODB_URI, NEXTAUTH_SECRET, CLOUDINARY creds

# 3 · Run dev server
pnpm dev               # http://localhost:3000

# 4 · (Optional) E2E tests
pnpm test:e2e
