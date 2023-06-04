"use client";
import useLogin from "@swiftshop/hooks/useLogin";
import { UserCredentials } from "@swiftshop/types/User";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import useUser from "@swiftshop/hooks/useUser";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const credentials: UserCredentials = {
    email,
    password,
  };
  const [queryClient, loginMutation] = useLogin(credentials);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await loginMutation.mutateAsync();
      queryClient.setQueryData(["user"], data);
      router.push("/");
      toast.success(`Logged in successfully!`);
    } catch (error: any) {
      console.error(error);
      toast.error(`There was an error logging in. Please try again.`);
    }
  };
  return (
    <section className="container py-4 flex justify-around">
      <div className="login">
        <h1 className="mx-auto text-center text-3xl">
          Log in to SwiftShop
        </h1>
        <form
          className="mx-auto max-w-sm"
          method="post"
          onSubmit={(e) => handleSubmit(e)}
          action="/api/new-user"
        >
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            className="block w-full border rounded-md px-2 py-1"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="block w-full border rounded-md px-2 py-1"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="my-4 block w-full border rounded-md px-2 py-1"
          >
            Log in
          </button>
        </form>
      </div>
      <div className="register">
        <h1 className="mx-auto text-center text-3xl">
          Not a member yet? Sign up!
        </h1>
        <Link href="/new-user">Register now</Link>
      </div>
    </section>
  );
}
