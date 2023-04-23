"use client";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { fetchJson } from "@swiftshop/lib/fetchJson";
import { UserCredentials } from "@swiftshop/types/User";

export default function NewUserPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation(
    ({ email, password }: UserCredentials) =>
      fetchJson(`/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
  );
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

      if (user.error) {
        throw new Error(user.error.message);
      }
    } catch (error: any) {
      console.error(error);
    }
  };
  return (
    <div className="container py-4">
      <h1 className="mx-auto text-center text-3xl">
        Sign in to SwiftShop
      </h1>
      <form
        className="mx-auto max-w-sm"
        method="post"
        onSubmit={(e) => handleSubmit(e)}
        action="/api/new-user"
      >
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          className="block w-full border rounded-md px-2 py-1"
          onChange={(e) => setUsername(e.target.value)}
        />
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
          Register
        </button>
      </form>
    </div>
  );
}
