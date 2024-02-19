import React from 'react'
import type { Metadata } from 'next';
import { TestTube } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Test Page',
    description: 'Test Page to test the app',
};

const page = () => {
    return (
        <div className='flex text-2xl gap-2 justify-center items-center mt-2'>
            Test Page With Meta Data <TestTube className='hover:text-green-500'/>
        </div>
    )
}

export default page
