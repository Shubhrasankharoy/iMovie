import Header from "@/components/Header";
import { BG_URL } from "@/utils/constants";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";


export default function Home() {
  const user = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/browse');
    }
  }, [user]);
  return (
    <section className="relative min-h-screen flex justify-center">
      <img className="absolute w-full h-full pointer-events-none object-cover" src={BG_URL} alt="background" />
      <div className="absolute w-full h-full bg-gradient-to-b to-[#00000069] from-[#0000006c]"></div>
      <div className="container flex flex-col justify-between mx-auto z-10">
        <Header />

        <div className="w-full flex flex-col items-center justify-center mb-10 space-y-4 grow">
          <h1 className="text-7xl font-bold w-2/4 text-center">Unlimited movies, TV shows and more</h1>
          <p className="text-lg font-bold">Starts at ₹149. Cancel at any time.</p>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="space-x-3">
            <input className="py-4 px-3 bg-gray-900/70 border border-gray-900 w-[450] rounded-sm" name="email" type="text" placeholder="Email address" />
            <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-sm cursor-pointer'>Get Started 	&gt; </button>
          </div>
        </div>

      </div>
    </section>
  );
}
