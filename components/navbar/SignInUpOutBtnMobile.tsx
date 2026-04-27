import { Button } from "@/components/ui/button"
import {
  Show,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"
import { PiSignIn } from "react-icons/pi"
import { PiSignOut } from "react-icons/pi"
import { TbArrowsJoin } from "react-icons/tb"

function SignInUpOutBtnMobile() {
  return (
    <div>
      <Show when='signed-out'>
        <div className='flex flex-col gap-4'>
          <SignInButton mode='modal'>
            <div className='flex items-center gap-2 cursor-pointer'>
              <PiSignIn size={20} />
              Log In
            </div>
          </SignInButton>
          <SignUpButton>
            <div className='flex items-center gap-2 cursor-pointer'>
              <TbArrowsJoin size={20} />
              Sign up
            </div>
          </SignUpButton>
        </div>
      </Show>
      <Show when='signed-in'>
        <SignOutButton>
          <div className='flex items-center gap-2 cursor-pointer'>
            <PiSignOut size={20} />
            Sign out
          </div>
        </SignOutButton>
      </Show>
    </div>
  )
}
export default SignInUpOutBtnMobile
