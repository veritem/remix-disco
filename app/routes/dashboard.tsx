import { Fragment } from "react"
import { MetaFunction } from "remix"
import Nav from "~/components/Nav"

export const meta: MetaFunction = () => {
    return {
        title: "Vehicle management applications",
    }
}

export default function Dashboard() {
    return (
        <Fragment>
            <Nav />
            <div>dashboard</div>
        </Fragment>
    )
}
