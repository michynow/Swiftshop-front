import cookie from "cookie";
import { fetchJson } from "@swiftshop/lib/fetchJson";
import {
  type UserCredentials,
  type UserAuth,
} from "@swiftshop/types/User";

export async function POST(req: Request) {
  const { email, password }: UserCredentials = await req.json();
  const res: UserAuth = await fetchJson(
    `${process.env.CMS_URL}/api/auth/local`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    }
  );
  const { jwt, user } = res;
  try {
    if (res) {
      return new Response(
        JSON.stringify({
          id: user.id,
          name: user.username,
        }),
        {
          headers: {
            "Set-Cookie": cookie.serialize("jwt", jwt, {
              path: "/api",
              httpOnly: true,
            }),
          },
        }
      );
    }
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: "Invalid credentials. Please try again.",
      }),
      {
        status: error.status || 500,
      }
    );
  }
}
