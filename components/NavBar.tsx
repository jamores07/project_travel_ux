import Image from "next/image";
import Link from "next/link"


const NavBar = () => {
  return (
   <nav className="">
    <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
    </Link>
   </nav>
  )
}

export default NavBar