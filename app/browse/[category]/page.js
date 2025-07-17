import { BASE_IMAGE_URL, CATEGORIES } from '@/utils/constants';
import React from 'react'

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({category}));
}


export default async function page({params}) {
  const { category } = await params;

  return (
    <div>
      <h1>Category: {category}</h1>
    </div>
  )
}
