import { useEffect } from 'react'
import toast from 'react-hot-toast'
//import { ActionFunction, Form, json, Link, MetaFunction, useActionData } from 'remix'
import * as Z from 'zod'
import { createUserSession } from '~/utils/session.user'
import { validateAction } from '~/utils/validation'

const schema = Z.object({
    email: Z.string().email(),
    password: Z.string().min(2),
})

type ActionInput = Z.TypeOf<typeof schema>

export const action: ActionFunction = async ({ request }) => {
    const { formData, errors } = await validateAction<ActionInput>({
        request,
        schema,
    })

    if (errors) {
        return json({ errors }, { status: 400 })
    }

    const signupReq = await fetch('http://localhost:4000/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })

    const signupRes = await signupReq.json()

    if (signupRes?.access_token) {
        console.log(signupRes.access_token)
        return createUserSession(signupRes.access_token, '/dashboard')
    } else {
        return json(
            { errors: { email: 'Invalid email or password' } },
            { status: 400 }
        )
    }

    return null
}

export const meta: MetaFunction = () => {
    return {
        title: 'siginin',
    }
}

export default function Signup() {
    const data = useActionData()

    useEffect(() => {
        if (data?.errors.email) {
            toast.error(data.errors.email)
        } else if (data?.errors.password) {
            toast.error(data.errors.password)
        }
    }, [data])

    return (
        <section className="flex justify-center items-center w-screen h-screen flex-col gap-3">
            <Form className="w-[25rem] flex flex-col gap-5" method="post">
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button className="bg-blue-500 py-3 text-white">Sigin</button>
            </Form>
            <p>
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-500">
                    signup
                </Link>
            </p>
        </section>
    )
}
