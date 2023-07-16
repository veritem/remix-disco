import type { ActionFunction, LoaderFunction } from "remix";
import { redirect } from "remix";
import { logout } from "~/utils/session.user";

export let action: ActionFunction = async ({ request }) => {
    return logout(request);
};

export let loader: LoaderFunction = async () => {
    return redirect("/");
};