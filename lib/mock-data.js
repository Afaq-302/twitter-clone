// Mock data for the Twitter clone
export const mockUsers = [
  {
    id: 1,
    username: "afaq_dev",
    displayName: "Afaq",
    avatar: "https://images.unsplash.com/photo-1728257679663-24eec7b8c203?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    banner: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Software developer passionate about web technologies. Building the future one line of code at a time.",
    location: "San Francisco, CA",
    website: "https://johndoe.dev",
    joinDate: "March 2020",
    following: 234,
    followers: 1205,
    verified: true,
  },
  {
    id: 2,
    username: "jane_smith",
    displayName: "Jane Smith",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    banner: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "UX Designer | Coffee enthusiast ☕ | Dog lover 🐕",
    location: "New York, NY",
    website: "https://janesmith.design",
    joinDate: "January 2021",
    following: 456,
    followers: 892,
    verified: false,
  },
  {
    id: 3,
    username: "tech_guru",
    displayName: "Tech Guru",
    avatar: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    banner: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Tech enthusiast sharing the latest in AI, web dev, and startup culture.",
    location: "Austin, TX",
    website: "https://techguru.blog",
    joinDate: "June 2019",
    following: 1200,
    followers: 5600,
    verified: true,
  },
  {
    id: 4,
    username: "sarah_dev",
    displayName: "Sarah Wilson",
    avatar: "https://plus.unsplash.com/premium_photo-1708110769673-c97bb8d17453?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    banner: "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Full-stack developer | React enthusiast | Open source contributor",
    location: "Seattle, WA",
    website: "https://sarahwilson.dev",
    joinDate: "September 2020",
    following: 678,
    followers: 1340,
    verified: false,
  },
]

export const mockTweets = [
  {
    id: 1,
    userId: 1,
    content:
      "Just shipped a new feature using Next.js 15! The new caching improvements are incredible. Can't wait to see what the community builds with it. 🚀",
    timestamp: "2h",
    likes: 24,
    retweets: 8,
    replies: 3,
    image: null,
  },
  {
    id: 2,
    userId: 2,
    content:
      "Working on a new design system for our startup. The challenge of creating consistent, accessible components never gets old. Here's a sneak peek of our button variations! 🎨",
    timestamp: "4h",
    likes: 156,
    retweets: 23,
    replies: 12,
    image: "https://images.unsplash.com/photo-1735964366700-9eedefcf0065?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    userId: 3,
    content:
      "Hot take: The future of web development is not just about frameworks, but about understanding the fundamentals. CSS, HTML, and JavaScript mastery will always be relevant.",
    timestamp: "6h",
    likes: 89,
    retweets: 34,
    replies: 18,
  },
  {
    id: 4,
    userId: 4,
    content:
      "Debugging a tricky React state issue and found the solution in the most unexpected place - the React docs! 📚 Sometimes the answer is right there in front of us.",
    timestamp: "8h",
    likes: 67,
    retweets: 12,
    replies: 7,
  },
  {
    id: 5,
    userId: 1,
    content:
      "Coffee shop coding session complete ☕ There's something magical about the ambient noise that helps with focus. What's your favorite coding environment?",
    timestamp: "12h",
    likes: 45,
    retweets: 6,
    replies: 15,
  },
  {
    id: 6,
    userId: 3,
    content:
      "AI is transforming how we write code, but it's not replacing developers - it's making us more efficient. The key is learning how to work WITH AI tools, not against them.",
    timestamp: "1d",
    likes: 234,
    retweets: 67,
    replies: 43,
  },
  {
    id: 7,
    userId: 2,
    content:
      "Just finished a user research session. The insights we get from talking directly to users are invaluable. No amount of analytics can replace real human feedback.",
    timestamp: "1d",
    likes: 78,
    retweets: 19,
    replies: 9,
  },
  {
    id: 8,
    userId: 4,
    content:
      "Open source contribution tip: Start small! Fix typos, improve documentation, or add tests. Every contribution matters and helps you learn the codebase. 🌟",
    timestamp: "2d",
    likes: 123,
    retweets: 45,
    replies: 21,
  },
]

export const mockTrends = [
  { topic: "#NextJS", tweets: "125K" },
  { topic: "#WebDev", tweets: "89K" },
  { topic: "#React", tweets: "67K" },
  { topic: "#JavaScript", tweets: "234K" },
  { topic: "#TailwindCSS", tweets: "45K" },
  { topic: "#OpenSource", tweets: "78K" },
  { topic: "#AI", tweets: "156K" },
  { topic: "#UXDesign", tweets: "34K" },
]

export const mockSuggestions = [
  {
    id: 5,
    username: "react",
    displayName: "React",
    avatar: "/placeholder.svg?height=40&width=40",
    verified: true,
    followers: "2.1M",
  },
  {
    id: 6,
    username: "vercel",
    displayName: "Vercel",
    avatar: "/placeholder.svg?height=40&width=40",
    verified: true,
    followers: "456K",
  },
  {
    id: 7,
    username: "tailwindcss",
    displayName: "Tailwind CSS",
    avatar: "/placeholder.svg?height=40&width=40",
    verified: true,
    followers: "234K",
  },
]

// Helper function to get user by ID
export const getUserById = (id) => {
  return mockUsers.find((user) => user.id === id)
}

// Helper function to get user by username
export const getUserByUsername = (username) => {
  return mockUsers.find((user) => user.username === username)
}

// Helper function to get tweets by user ID
export const getTweetsByUserId = (userId) => {
  return mockTweets.filter((tweet) => tweet.userId === userId)
}

// Helper function to search tweets
export const searchTweets = (query) => {
  if (!query) return mockTweets
  return mockTweets.filter((tweet) => tweet.content.toLowerCase().includes(query.toLowerCase()))
}
