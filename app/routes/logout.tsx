import { type ActionFunction, type LoaderFunction, redirect } from "@remix-run/node";
import { logout } from "~/utils/session.user";

export let action: ActionFunction = async ({ request }) => {
    return logout(request);
};

export let loader: LoaderFunction = async () => {
    return redirect("/");
};