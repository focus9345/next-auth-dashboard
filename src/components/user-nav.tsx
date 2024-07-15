import Link from "next/link"
import { options } from "../app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default async function UserNavbar() {
    const session = await getServerSession(options)
    const userName = session?.user?.name

    return (
        <nav className="bg-slate-400 p-4">
            <ul className="flex justify-evenly text-2xl font-bold">

                {session ? (
                    <>
                        <li> { userName } </li> 
                        <li><Link href="/api/auth/signout">Sign Out</Link></li>
                    </>
                ) : (
                    <li><Link href="/api/auth/signin">Sign In</Link></li>
                )}


            </ul>
        </nav>
    )
}