"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React, { use } from "react";
import { User } from "next-auth";
import { Span } from "next/dist/trace";
import { Button } from "./ui/button";
const Navbar = () => {
  const { data: session } = useSession();
  const user: User = session?.user as User;

  return (
    <nav className="p-4 md:p-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <a className="text-xl font-bold mb-4 md:mb-0" href="/">
          SpectreChat
        </a>
        {session ? (
          <>
            <span className="mr-4">
              Welcome, {user?.email || user?.username}
            </span>
            <Button className="w-full m-auto" onClick={() => signOut()}>
              Logout
            </Button>
          </>
        ) : (
          <Link href="/sign-in">
            <Button className="w-full m-auto">Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
