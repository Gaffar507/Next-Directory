import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 shadow-sm bg-white font-work-sans">
      <nav className="flex justify-between items-center text-black">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        {session && session?.user ? (
          <div className="flex items-center gap-5">
            <Link href={"/startup/create"}>
              <span>Create</span>
            </Link>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button type="submit">
                <span>Sign Out</span>
              </button>
            </form>

            <Link href={`user/${session?.user?.id}`}>
              <span>{session?.user?.name}</span>
            </Link>
          </div>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button type="submit">
              <span>Sign In</span>
            </button>
          </form>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
