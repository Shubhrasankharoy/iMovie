"use client"
import Header from '@/components/Header'
import { BG_URL } from '@/utils/constants'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function page() {
    const router = useRouter()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!user) {
            router.push('/login')
        }
    }, []);
  return (
    <section className="relative min-h-screen flex justify-center">
      <img className="absolute w-full h-full pointer-events-none object-cover" src={BG_URL} alt="background" />
      <div className="absolute w-full h-full bg-gradient-to-b to-[#00000069] from-[#0000006c]"></div>
      <div className="container flex flex-col justify-between mx-auto z-10">
        <Header />
      </div>
    </section>
  )
}
