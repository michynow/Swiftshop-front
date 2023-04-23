import { useQuery } from "@tanstack/react-query";
import { fetchJson } from "@swiftshop/lib/fetchJson";
export default function useUser() {
  const { data: user } = useQuery(
    ["user"],
    async () => {
      try {
        return await fetchJson(`${process.env.CMS_URL}/api/user`);
      } catch (error) {
        return null;
      }
    },
    {
      staleTime: 30000,
      cacheTime: 0,
      keepPreviousData: true,
    }
  );
  return user;
}
