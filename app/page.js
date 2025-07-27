"use client"
import Header from "@/components/Header";
import Link from "next/link";
import { BG_URL, FEATURES, TECH_STACKS } from "@/utils/constants";
import Footer from "@/components/Footer";
import Tooltips from "@/components/Tooltips";
import ShineCard from "@/components/ShineCard";


export default function Home() {



  return (
    <div className="relative min-h-screen flex justify-center">
      <img className="absolute w-full h-full pointer-events-none object-cover" src={BG_URL} alt="background" />
      {/* <div className="absolute w-full h-full bg-gradient-to-b to-[#00000069] from-[#0000006c]"></div> */}
      <div className="container flex flex-col justify-between mx-auto z-10">
        <Header />

        <div className="w-1/2 mx-auto flex flex-col items-center justify-center my-10 mt-[25vh] space-y-4 grow">

          <h1 className="w-full mb-4 text-4xl text-center font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white flex flex-col">
            <span className="animate-fade-up animate-duration-300">Instantly launch your movie</span>
             <span className="animate-fade-up animate-duration-500 bg-gradient-to-r from-blue-500 to-fuchsia-500 bg-clip-text text-transparent">discovery hub</span>
            </h1>
          <p className="animate-fade-up animate-duration-700 w-full p-0 mb-8 text-lg text-center dark:text-gray-400">
            Movie sites today power the future of film exploration, fueling creators and fans with swift, stylish tools that transform how everyone finds, shares, and enjoys cinema online.
            </p>
          <div className="animate-fade-up animate-duration-900 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              href="/login"
              className="inline-flex font-bold justify-center items-center py-3 px-5 text-base text-center text-white rounded-lg bg-linear-to-r from-primary to-blue-600 hover:bg-linear-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
            <Link
              href="https://github.com/Shubhrasankharoy/iMovie"
              className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <section className="animate-fade-up animate-duration-[1100ms] max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">

            {FEATURES.map((feature, index) => (

              <ShineCard
                key={index}
                heading={feature.heading}
                points={feature.points}
              />
            ))}

          </div>
        </section>



        {/* Tech Stack */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <div className="mt-14 my-4 w-full flex gap-5">
            {TECH_STACKS.map((stack, index) => (
              <Tooltips key={index} className={stack.class + ` animate-fade-left animate-duration-[${1000 + 200 * index}ms]`} imgURL={stack.imgURL} tooltipContent={stack.tooltipContent} />
            ))}

          </div>
          <p className="text-gray-400">
            Robust web experience with state-of-the-art frameworks, cloud hosting, and seamless AI integration.
          </p>
        </section>

        {/* Footer Section */}

        <Footer />

      </div >
    </div >

  );
}
