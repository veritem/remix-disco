import { ActionFunction, Form, json, MetaFunction } from 'remix'
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

    return null
}




export default function signup() {
    return (
        <section className="flex justify-center items-center w-screen h-screen">
            <Form className="w-[25rem] flex flex-col gap-5">

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
                    <input type="text" id="nationalId" name="nationalId" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button className="bg-blue-500 py-3 text-white">Sigin</button>
            </Form>
        </section>
    )
}
