import { Outlet } from 'remix'
import Nav from '~/components/Nav'

export default function Vehicles() {
    return (
        <section>
            <Nav />
            <Outlet />
        </section>
    )
}
