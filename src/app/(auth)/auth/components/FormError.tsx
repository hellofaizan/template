import React from 'react'
import { cn } from '~/lib/utils'

export const FormError = ({ message }: { message: any }) => {
    return (
        <div className={cn(
            // if message startes with "The Email is already" make div block else hidden
            message.startsWith("The Email is already") ? "block" : "hidden",
        )}>
            {/* a light red box with a white text that says "Error 🔐" and a paragraph that says "Opps! Something went wrong. Please try again later." */}
            <div className="bg-red-100 dark:bg-red-400/20 border border-red-400 dark:border-red-300/30 rounded-md text-gray-900 dark:text-gray-300 px-4 py-3 relative" role="alert">
                <strong className="font-bold">Opps!</strong>
                <span className="block sm:inline">{message}</span>
            </div>
        </div>
    )
}
