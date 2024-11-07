import { AlertCircle } from 'lucide-react'
import React from 'react'

function NotFound() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
                <AlertCircle className="h-16 w-16" />
                <h1 className="text-xl font-semibold">Page Not Found</h1>
                <button variant="default" className="rounded-full">
                    Go To Homepage
                </button>
            </div>
        </>
    )
}

export default NotFound