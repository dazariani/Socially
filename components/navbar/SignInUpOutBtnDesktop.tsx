import { Button } from "@/components/ui/button"
import {
  Show,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"

export default async function SignInUpOutBtnDesktop() {
  return (
    <div>
      <Show when='signed-out'>
        <div className='flex gap-3'>
          <SignInButton mode='modal'>
            <Button variant='outline' className='cursor-pointer'>
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button variant='outline' className='cursor-pointer'>
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      </Show>
      <Show when='signed-in'>
        <div className='flex justify-center items-center gap-2'>
          <UserButton />
          <SignOutButton>
            <Button variant='outline' className='cursor-pointer'>
              Sign Out
            </Button>
          </SignOutButton>
        </div>
      </Show>
    </div>
  )
}
