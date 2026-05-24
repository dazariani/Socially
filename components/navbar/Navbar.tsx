import Link from "next/link"
import Container from "../global/Container"
import { ModeToggle } from "@/lib/ModeToggle"
import DesktopNavlist from "./DesktopNavlist"
import { Separator } from "@/components/ui/separator"
import MobileNavlist from "./MobileNavlist"
import { currentUser } from "@clerk/nextjs/server"
import { syncUser } from "@/actions/user.action"

async function Navbar() {
  const user = await currentUser()
  if (user) await syncUser()
  return (
    <>
      <Container className='w-full sticky top-0'>
        <section className='flex justify-between items-center py-6'>
          <div>
            <Link href='/'>
              <h1 className='text-2xl font-bold'>Socially</h1>
            </Link>
          </div>

          <div className='flex justify-between items-center gap-6'>
            <ModeToggle />
            <DesktopNavlist />
            <MobileNavlist />
          </div>
        </section>
      </Container>
      <Separator />
    </>
  )
}
export default Navbar
