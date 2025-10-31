import React from 'react';
import ClientPeoplePage from './ClientPeoplePage';

export default function page() {
  return (
    <React.Suspense
      fallback={
        <div className='w-screen h-screen flex items-center justify-center'>
          <h1 className='text-2xl text-white'>Loading...</h1>
        </div>
      }
    >
      <ClientPeoplePage />
    </React.Suspense>
  );
}