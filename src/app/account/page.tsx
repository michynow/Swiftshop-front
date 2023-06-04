"use client";
import useUser from "@swiftshop/hooks/useUser";
import useLogout from "@swiftshop/hooks/useLogout";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
const AccountPage = () => {
  const router = useRouter();
  const [queryClient, logoutMutation] = useLogout();
  const userData = useUser();
  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    await queryClient.invalidateQueries(["user"]);
    // throws an error in Next, as it's not a stable ver yet, so a workaround is needed
    // redirect("/");
    router.push("/");
  };
  if (!userData) {
    redirect("/log-in");
  }
  return (
    <div className="container">
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
export default AccountPage;
