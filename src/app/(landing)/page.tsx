import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { ModeToggle } from "~/components/ModeToogle";
import { auth } from "~/server/auth";

export default async function HomePage() {
  const session = await auth();
  return (
    <div className="relative flex min-h-dvh items-center justify-center gap-2 overflow-hidden md:min-h-screen">
      <div className="flex gap-3">
        <span className="text-center">You are good to go</span>
        <ModeToggle />
      </div>
    </div>
  );
}
