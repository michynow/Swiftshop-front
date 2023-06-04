import cookie from "cookie";
export async function POST() {
  const body = JSON.stringify({ message: "Logged out" });
  const responseInit: ResponseInit = {
    status: 200,
    headers: {
      "Set-Cookie": cookie.serialize("jwt", "", {
        path: "/api",
        httpOnly: true,
        expires: new Date(0),
      }),
    },
  };
  return new Response(body, responseInit);
}
