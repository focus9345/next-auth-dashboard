import Link from "next/link"
import { options } from "../app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default async function UserNavbar() {
    const session = await getServerSession(options)
    const userName = session?.user?.name

    return (
        <nav className="bg-slate-800 p-5">
            <ul className="flex justify-evenly font-semibold">
                <li>Company</li>
                <li className="grow"></li>

                {session ? (
                    <>
                        <li>
                            <span className="p-x6"> { userName } </span>
                            <Link href="/api/auth/signout" className="bg-blue-500 hover:bg-blue-700 text-white font-regular py-2 px-4 rounded-full">Sign Out</Link>
                        </li>
                    </>
                ) : (
                    <li><Link href="/api/auth/signin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Sign In</Link></li>
                )}


            </ul>
        </nav>
    )
}