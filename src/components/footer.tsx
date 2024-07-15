import Link from "next/link";
import { FaCopyright } from "react-icons/fa6";

export default function GlobalFooter() {

    const date = new Date().getFullYear();

    return (
        <footer className="flex flex-row border border-slate-500">
            <div className="basis-1/4 p-4"><FaCopyright className="inline-block" /> Copyright {date} developed by <Link href="https://connorjoshua.com">Joshua Connor</Link></div>
            <div className="basis-1/4 p-4">
                <nav className="bg-slate-500 p-4">
                    <ul className="flex flex-col text-xl font-medium">
                        <li><Link href="/">Dashboard</Link></li>
                        <li><Link href="/company">Company</Link></li>
                        <li><Link href="/calendar">Calendar</Link></li>
                        <li><Link href="/staff">Staff</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="basis-1/2 p-4">
                <span>Footer details TBD.</span>
            </div>

        </footer>
    )
}