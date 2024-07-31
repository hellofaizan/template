"use client"

import { buttonVariants } from '~/components/ui/button';
import { AlertTriangle, ChevronLeft } from 'lucide-react';
import { NextPage } from 'next';
import Link from 'next/link';

const ErrorPage: NextPage = () => {
    return (
        <section className='min-h-[100dvh] md:min-h-screen flex flex-col items-center justify-center text-center space-y-10'>
            <AlertTriangle size={100} className=' text-red-500' />
            <div className='space-y-2 mt-3'>
                <h1 className='text-xl font-medium'>Oops! Error</h1>
                <p>Something went wrong. Try again later</p>
            </div>
            <Link href={'/'} className={buttonVariants({ variant: "default" })}>
                <ChevronLeft /> Go back to home
            </Link>
        </section >
    );
};

export default ErrorPage;