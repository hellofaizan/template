"use client";

import { USERROLE } from "@prisma/client";
import { ChevronLeft, Skull } from "lucide-react";
import Link from "next/link";
import { useCurrentRole } from "~/hooks/use-current-role";
import { buttonVariants } from "~/components/ui/button";

interface RoleGateProps {
    children: React.ReactNode;
    allowedRoles: USERROLE;
}

export const RoleGate = ({ children, allowedRoles }: RoleGateProps) => {
    const role = useCurrentRole();

    if (role !== allowedRoles) {
        return (
            console.log("😏 Nice try Buddy:) XDD"),
            <>
                <section className='min-h-[100dvh] md:min-h-screen flex flex-col items-center justify-center text-center space-y-10'>
                    <Skull size={100} className=' text-red-500' />
                    <div className='space-y-2 mt-3'>
                        <h1 className='text-xl font-medium'>Sorry! You are not authorized</h1>
                        <p>It looks like you&apos;ve reached a URL that you can&apos;t visit.</p>
                    </div>
                    <Link href={'/'} className={buttonVariants({ variant: "default" })}>
                        <ChevronLeft /> Go back to home
                    </Link>
                </section >
            </>
        );
    }
    return <>{children}</>;
};

