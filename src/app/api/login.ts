import cookie from "cookie";
import { fetchJson } from "@swiftshop/lib/fetchJson";
import { NextApiRequest, NextApiResponse } from "next";
async function handleLogin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  const { email, password } = req.body;
  try {
    const { jwt, user } = await fetchJson(
      `${process.env.CMS_URL}/auth/local`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: email, password }),
      }
    );
    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        cookie.serialize("jwt", jwt, {
          path: "/api",
          httpOnly: true,
        })
      )
      .json({
        id: user.id,
        name: user.username,
      });
  } catch (error: any) {
    res.status(error.status || 500).json({ error: error.message });
    return;
  }
}
