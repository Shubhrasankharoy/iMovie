"use client";

import useUpdatePersonDetails from '@/hooks/useUpdatePersonDetails';
import { useSearchParams } from 'next/navigation';
import React from 'react'

export default function page() {
    const searchParams = useSearchParams();

    const personId = searchParams.get('id');

    useUpdatePersonDetails(personId);
    if (!personId) return <div className='text-white text-center'>No person ID provided.</div>;

    return (
        <div>
            <h1 className='text-white text-2xl'>Person Details Page</h1>
            <p className='text-gray-400'>Details for person with ID: {personId}</p>
            {/* Additional person details can be rendered here */}
        </div>
    )
}
