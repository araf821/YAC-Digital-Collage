"use client";

import SignOutButton from "@/components/SignOutButton";
import { User } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface UserAuthBannerProps {
  user: User;
}

const UserAuthBanner = ({ user }: UserAuthBannerProps) => {
  const [closed, setClosed] = useState(false);

  if (closed) {
    return null;
  }

  return (
    <div className="mt-4 flex items-center justify-between gap-2 overflow-hidden rounded-md border border-green-400 bg-green-400/10">
      <div className="m-2.5 flex-1">
        <p className="md:text-lg">
          Currently logged in as{" "}
          <span className="font-semibold">{user.name}</span>. You have the{" "}
          <span className="font-semibold">ADMIN</span> role.
        </p>
        <div className="flex gap-1 text-sm text-zinc-400">
          <p>Not {user.name}?</p>
          <SignOutButton />
        </div>
      </div>
      <button
        onClick={() => setClosed(true)}
        className="mr-2 mt-2 self-start text-zinc-400 transition duration-200 hover:text-white"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};
export default UserAuthBanner;
