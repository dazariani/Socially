import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"

import { currentUser } from "@clerk/nextjs/server"
import { CiHome } from "react-icons/ci"
import { CiBellOn } from "react-icons/ci"
import { CiUser } from "react-icons/ci"
import Link from "next/link"
import SignInUpOutBtnMobile from "./SignInUpOutBtnMobile"
import { IoMenu } from "react-icons/io5"

async function MobileNavlist() {
  const user = await currentUser()
  return (
    <section className='block md:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>
            <IoMenu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className='flex items-center'>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className='grid flex-1 auto-rows-min gap-6 px-4'>
            <Link href='/' className='flex gap-1'>
              <CiHome size={20} />
              <p>Home</p>
            </Link>
            {user && (
              <>
                <Link href='/notifications' className='flex gap-1'>
                  <CiBellOn size={20} />
                  <p>Notifications</p>
                </Link>
                <Link href='/profile' className='flex gap-1'>
                  <CiUser size={20} />
                  <p>Profile</p>
                </Link>
              </>
            )}
            <SignInUpOutBtnMobile />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}
export default MobileNavlist
