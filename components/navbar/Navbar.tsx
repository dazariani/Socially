import Link from "next/link"
import Container from "../global/Container"
import { ModeToggle } from "@/lib/ModeToggle"
import DesktopNavlist from "./DesktopNavlist"
import { Separator } from "@/components/ui/separator"
import MobileNavlist from "./MobileNavlist"

function Navbar() {
  return (
    <>
      <Container className='w-full'>
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
