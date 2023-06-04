"use client";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { fetchJson } from "@swiftshop/lib/fetchJson";
import { UserCredentials } from "@swiftshop/types/User";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useLogin from "@swiftshop/hooks/useLogin";

export default function NewUserPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [queryClient, loginMutation] = useLogin({ email, password });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const user = await fetchJson(`/api/new-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (user.error) throw new Error(user.error.message);

      const mutation = await loginMutation.mutateAsync();
      queryClient.setQueryData(["user"], mutation);
      router.push("/");
      toast.success("Account created successfully!");
    } catch (error: any) {
      console.error(error);
      toast.error(
        "There was an error creating your account. Please try again."
      );
    }
  };
  return (
    <div className="container py-4">
      <h1 className="mx-auto my-4 text-center text-3xl">
        Sign in to SwiftShop
      </h1>
      <form
        className="mx-auto max-w-sm"
        method="post"
        onSubmit={(e) => handleSubmit(e)}
        action="/api/new-user"
      >
        <div className="form-group py-1">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            className="block w-full border rounded-md px-2 py-1"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group py-1">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            className="block w-full border rounded-md px-2 py-1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group py-1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="block w-full border rounded-md px-2 py-1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="my-4 block w-full border rounded-md px-2 py-1"
        >
          Register
        </button>
      </form>
    </div>
  );
}
