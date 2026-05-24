import { User } from "@/components/utils/types"
import { capitalizeFirstLetter } from "../utils/methods"
import { Card, CardContent } from "../ui/card"
import Link from "next/link"
import { currentUser } from "@clerk/nextjs/server"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Separator } from "../ui/separator"
import { LuMapPin } from "react-icons/lu"
import { FaLink } from "react-icons/fa"

async function LogedInSidebar({ user }: { user: User }) {
  // const authUser = await currentUser()
  let userName = user.name ? capitalizeFirstLetter(user.name) : ""

  return (
    <div className='sticky top-20'>
      <Card>
        <CardContent className='pt-6'>
          <div className='flex flex-col items-center text-center'>
            <Link href={`/profile/${user.username}`}>
              <Avatar className='w-20 h-20 border-2'>
                <AvatarImage src={user.image || "/avatar.png"} />
              </Avatar>

              <div className='mt-4 space-y-1'>
                <h3 className='font-semibold'>{userName}</h3>
                <p className='text-sm text-muted-foreground'>{user.username}</p>
              </div>
            </Link>

            {user.bio && (
              <p className='mt-3 text-sm text-muted-foreground'>{user.bio}</p>
            )}

            <div className='w-full'>
              <Separator className='my-4' />
              <div className='flex justify-between'>
                <div>
                  <p className='font-medium'>{user._count.following}</p>
                  <p className='text-xs text-muted-foreground'>Following</p>
                </div>
                <Separator orientation='vertical' />
                <div>
                  <p className='font-medium'>{user._count.followers}</p>
                  <p className='text-xs text-muted-foreground'>Followers</p>
                </div>
              </div>
              <Separator className='my-4' />
            </div>

            <div className='w-full space-y-2 text-sm'>
              <div className='flex items-center text-muted-foreground'>
                <LuMapPin className='w-4 h-4 mr-2' />
                {user.location || "No location"}
              </div>
              <div className='flex items-center text-muted-foreground'>
                <FaLink className='w-4 h-4 mr-2 shrink-0' />
                {user.website ? (
                  <a
                    href={`${user.website}`}
                    className='hover:underline truncate'
                    target='_blank'
                  >
                    {user.website}
                  </a>
                ) : (
                  "No website"
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export default LogedInSidebar
