import {
  UseMutationResult,
  useMutation,
} from "@tanstack/react-query";
import { fetchJson } from "@swiftshop/lib/fetchJson";
import {
  useQueryClient,
  type QueryClient,
} from "@tanstack/react-query";

export default function useLogout(): [
  QueryClient,
  UseMutationResult<void, unknown, void, unknown>
] {
  const queryClient = useQueryClient();
  const logoutFn = async () => {
    const data = await fetchJson(`/api/logout`, {
      method: "POST",
    });
    return await data;
  };
  const logoutMutation = useMutation(logoutFn);
  return [queryClient, logoutMutation];
}
