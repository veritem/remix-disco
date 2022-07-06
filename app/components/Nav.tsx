import { Link } from "remix";

export default function Nav() {
    return (
        <nav className="bg-blue-500 flex justify-around items-center text-white py-5">
            <div>
                <Link to="/dashboard">VMGT</Link>
            </div>
            <div>
                <ul className="flex  gap-4">
                    <li>
                        <Link to="/vehicles">Home</Link>
                    </li>
                    <li>
                        <Link to="/owners">Owners</Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
}
