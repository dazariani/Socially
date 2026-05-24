import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.actions"
import ProfilePageClient from "@/components/global/ProfilePageClient"
import { capitalizeFirstLetter } from "@/components/utils/methods"
import { notFound } from "next/navigation"

export async function generateMetadata({
  params,
}: {
  params: { username: string }
}) {
  const userName = (await params).username
  const user = await getProfileByUsername(userName)
  if (!user) return

  return {
    title: `${capitalizeFirstLetter(user.name) || user.username}`,
    description: user.bio || `Check out ${user.name}'s profile!`,
  }
}

async function ProfilePageServer({ params }: { params: { username: string } }) {
  const userName = (await params).username
  const user = await getProfileByUsername(userName)

  if (!user) notFound()

  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id),
  ])

  return (
    <ProfilePageClient
      user={user}
      posts={posts}
      likedPosts={likedPosts}
      isFollowing={isCurrentUserFollowing}
    />
  )
}
export default ProfilePageServer
