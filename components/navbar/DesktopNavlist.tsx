import Link from "next/link"
import { CiHome } from "react-icons/ci"
import { CiBellOn } from "react-icons/ci"
import { CiUser } from "react-icons/ci"
import SignInUpOutBtnDesktop from "@/components/navbar/SignInUpOutBtnDesktop"
import { currentUser } from "@clerk/nextjs/server"

async function DesktopNavlist() {
  const user = await currentUser()
  return (
    <section className='hidden md:flex items-center gap-15'>
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
      <SignInUpOutBtnDesktop />
    </section>
  )
}
export default DesktopNavlist
