import React from 'react'

export async function generateStaticParams() {
  const categories = ['now_playing', 'popular', 'top_rated', 'upcoming'];

  return categories.map((category) => ({category}));
}

export default async function page({params}) {
  const { category } = await params;

  return (
    <div>
      <h1>Category: {category}</h1>
    </div>
  )
}
