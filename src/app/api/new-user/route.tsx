// ${process.env.CMS_URL}/api/auth/local/register
import { type User } from "@swiftshop/types/User";
export async function POST(req: Request) {
  const data = await req.json();
  const res = await fetch(
    `${process.env.CMS_URL}/api/auth/local/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  try {
    const user: User = await res.json();
    return new Response(JSON.stringify(user), {
      status: 200,
      statusText: "OK",
    });
  } catch (error: any) {
    return new Response(JSON.stringify(error), {
      status: error.status,
      statusText: error.statusText,
    });
  }
}
