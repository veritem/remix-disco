import { createCookieSessionStorage, redirect } from "remix";

let storage = createCookieSessionStorage({
    cookie: {
        name: "RJ_session",
        secure: true,
        secrets: ["secret"],
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: true
    }
});

export async function createUserSession(
    token: string,
    redirectTo: string
) {
    let session = await storage.getSession();
    session.set("token", token);
    return redirect(redirectTo, {
        headers: {
            "Set-Cookie": await storage.commitSession(session)
        }
    });
}

export function getUserSession(request: Request) {
    return storage.getSession(request.headers.get("Cookie"));
};

export async function getUserToken(request: Request) {
    let session = await getUserSession(request);
    let userId = session.get("token");
    if (!userId || typeof userId !== "string") return null;
    return userId;
};

export async function logout(request: Request) {
    let session = await storage.getSession(request.headers.get("Cookie"));

    return redirect("/signin", {
        headers: {
            "Set-Cookie": await storage.destroySession(session)
        }
    });
};