import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { ActionFunction, Form, json, Link, MetaFunction, redirect, useActionData } from 'remix'
import * as Z from "zod"
import { validateAction } from '~/utils/validation'

export const meta: MetaFunction = () => {
    return {
        title: 'Vehicle management applications',
    }
}


const schema = Z.object({
    email: Z.string().email(),
    password: Z.string().min(2),
    names: Z.string().min(2),
    phone: Z.string().min(5),
    nationalId: Z.string().length(16),
})

type ActionInput = Z.TypeOf<typeof schema>


export const action: ActionFunction = async ({ request }) => {
    const { formData, errors } = await validateAction<ActionInput>({ request, schema })

    if (errors) {
        return json({ errors }, { status: 400 })
    }

    // fetch backend api to signin
    const signupReq = await fetch("http://localhost:4000/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })

    if (!signupReq.ok) {
        return json({ email: (await signupReq.json()).message }, { status: 400 })
    }


    return redirect("/signin")
}




export default function Signup() {

    const data = useActionData()

    useEffect(() => {
        if (data?.errors?.email) {
            toast.error(data.errors?.email)
        } else if (data?.errors?.password) {
            toast.error(data?.errors?.password)
        } else if (data?.errors.names) {
            toast.error(data?.errors?.names)
        } else if (data?.errors.phone) {
            toast.error(data?.errors?.phone)
        } else if (data?.errors.nationalId) {
            toast.error("National id " + data?.errors.nationalId)
        }
    }, [data])

    return (
        <section className="flex justify-center items-center w-screen h-screen flex-col gap-3">
            <Form className="w-[25rem] flex flex-col gap-5" method="post">

                <div className="flex flex-col">
                    <label htmlFor="names">Names</label>
                    <input type="text" id="names" name="names" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="nationalId">National Id</label>
                    <input type="text" id="nationalId" name="nationalId" min={16} max={16} />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button className="bg-blue-500 py-3 text-white">Sigin</button>
            </Form>
            <p>Have an account? <Link to="/signin" className="text-blue-500">signin</Link></p>
        </section>
    )
}
