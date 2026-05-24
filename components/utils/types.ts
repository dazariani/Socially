export type User = {
  _count: {
    posts: number
    followers: number
    following: number
  }
} & {
  id: string
  email: string
  username: string
  clerkId: string
  name: string | null
  bio: string | null
  image: string | null
  location: string | null
  website: string | null
  createdAt: Date
  updatedAt: Date
}
