import { Fragment } from "react"
import { LoaderFunction, MetaFunction, redirect } from "remix"
import Nav from "~/components/Nav"
import { getUserSession, getUserToken } from "~/utils/session.user"

export const meta: MetaFunction = () => {
    return {
        title: "Vehicle management applications",
    }
}

export const loader: LoaderFunction = async ({ request }) => {
    const token = await getUserToken(request)


    if (!token)
        return redirect("/signin")


    return null
}


export default function Dashboard() {
    return (
        <Fragment>
            <Nav />
            <div>dashboard</div>
        </Fragment>
    )
}
