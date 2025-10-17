"use client";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-black">
      <div className="max-w-md w-full px-6 py-8">
        <SignIn />
      </div>
    </div>
  );
}
