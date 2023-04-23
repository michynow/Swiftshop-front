import { fetchJson } from "@swiftshop/lib/fetchJson";
import { cookies } from "next/dist/client/components/headers";
export async function GET() {
  const jwt = cookies().get("jwt") ?? { value: null };
  try {
    const user = await fetchJson(
      `${process.env.CMS_URL}/api/users/me`,
      {
        headers: {
          Authorization: `Bearer ${jwt.value}`,
        },
      }
    );
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(error), {
      status: error.status,
      statusText: error.statusText,
    });
  }
}
