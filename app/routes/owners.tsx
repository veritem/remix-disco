import { Outlet } from "@remix-run/react";
import Nav from '~/components/Nav'

export default function Owners() {
    return (
        <section>
            <Nav />
            <Outlet />
        </section>
    )
}
