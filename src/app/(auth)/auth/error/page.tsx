import React from 'react'
import LogoImg from "../../../../../public/favicon.ico"

export default function page() {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src={LogoImg.src as string} alt="logo" />
                Tielinks
            </a>

            <div className="max-w-md w-full mx-auto rounded-sm md:rounded-lg p-3 md:p-8 shadow-input bg-transparent">
                <h2 className="font-bold w-full text-5xl md:text-6xl text-neutral-800 dark:text-neutral-200 text-center">
                    Error 🔐
                </h2>
                <p className="text-neutral-600 text-sm max-w-sm mt-4 dark:text-neutral-300 text-center">
                    Opps! Something went wrong. Please try again later.
                </p>
            </div>
        </div>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

