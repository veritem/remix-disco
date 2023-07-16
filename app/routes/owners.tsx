import { Outlet } from 'remix'
import Nav from '~/components/Nav'

export default function Owners() {
    return (
        <section>
            <Nav />
            <Outlet />
        </section>
    )
}
