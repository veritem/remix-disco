import { type MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export let meta: MetaFunction = () => {
    return {
        title: 'Vehicle management applications',
        description: 'Welcome to remix!',
    }
}

export default function Index() {
    return (
        <div className="font-display flex h-screen w-screen flex-col items-center justify-center bg-black font-primary text-white">
            <h1 className="font-display py-4 text-xl">
                {' '}
                Remix Starter and tailwindcss
            </h1>
            <Link to="/about" className="text-blue-500">
                about
            </Link>
        </div>
    )
}
