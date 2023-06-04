import {
  UseMutationResult,
  useMutation,
} from "@tanstack/react-query";
import { fetchJson } from "@swiftshop/lib/fetchJson";
import { type UserCredentials } from "@swiftshop/types/User";
import {
  useQueryClient,
  type QueryClient,
} from "@tanstack/react-query";

export default function useLogin(
  credentials: UserCredentials
): [QueryClient, UseMutationResult<void, unknown, void, unknown>] {
  const queryClient = useQueryClient();
  const { email, password } = credentials;
  const loginFn = async () => {
    await fetchJson(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return await fetchJson(`/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const loginMutation = useMutation(loginFn);
  return [queryClient, loginMutation];
}
