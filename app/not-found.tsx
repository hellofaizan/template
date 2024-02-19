import { buttonVariants } from '@/components/ui/button';
import { AlertTriangle, ChevronLeft } from 'lucide-react';
import { NextPage } from 'next';
import Link from 'next/link';

const ErrorPage: NextPage = () => {
    return (
        <section className='h-screen layout-container flex flex-col items-center justify-center text-center space-y-10'>
            <AlertTriangle size={100} className=' text-red-500' />
            <div className='space-y-2 mt-3'>
                <h1 className='text-xl font-medium'>Oops! Page Not Found</h1>
                <p>It looks like you've reached a URL that doesn’t exist.</p>
            </div>
            <Link href={'/'} className={buttonVariants({ variant: "default" })}>
                <ChevronLeft /> Go back to home
            </Link>
        </section >
    );
};

export default ErrorPage;
