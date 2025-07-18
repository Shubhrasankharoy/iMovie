"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import { signOut } from 'firebase/auth'
import { auth } from '@/utils/firebase'
import { toggleShowGPTSearch } from '@/utils/variableSlice'

export default function Header() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const path = usePathname();


    // Functions
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <div className='container mx-auto flex justify-between w-full h-28 py-3 relative z-10'>
            <Link href="/browse" className='flex items-center '>
                <h1 className='text-secondary font-extrabold text-3xl'>iMOVIE-GPT</h1>
            </Link>

            {path != '/login' && (
                <div className={"flex items-center justify-center space-x-3"}>
                    {user && (
                        <div 
                        className='flex items-center justify-center space-x-3 border border-gray-400  text-gray-300 px-3 py-2 rounded-lg cursor-text bg-gray-800 hover:bg-gray-700 transition-colors duration-200'
                        onClick={() => dispatch(toggleShowGPTSearch())}
                        >
                            <svg className='w-4' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>
                            <span className='text-sm'>Search with GPT</span>
                        </div>
                    )}
                    <div className="border border-gray-400 text-white px-3 py-2 rounded-lg flex items-center gap-2 bg-gray-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            role="img"
                            viewBox="0 0 16 16"
                            width="20"
                            height="20"
                            data-icon="languagesmall"
                            aria-hidden="true"
                            className="text-white"
                        >
                            <path
                                fill="currentColor"
                                d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                            ></path>
                        </svg>

                        <select
                            name="language"
                            id="language"
                            className="bg-gray-800 text-white border-none focus:outline-none"
                        >
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                        </select>
                    </div>

                    {!user ? (
                        <Link href="/login" className='bg-linear-to-r from-primary to-blue-600 hover:bg-linear-to-br text-white font-bold py-2 px-4 rounded-sm cursor-pointer'>
                            Sign in
                        </Link>
                    ) : (
                        <>
                            <h1 className='text-lg font-bold cursor-default'>{user.displayName}</h1>
                            <button
                                onClick={handleSignOut}
                                className='bg-linear-to-r from-primary to-blue-600 hover:bg-linear-to-br focus:ring-cyan-200 text-white font-bold py-2 px-4 rounded-sm cursor-pointer'>
                                Sign out
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}
