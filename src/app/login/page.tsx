
"use client"

import Image from "next/image";
import Link from "next/link";
import  {useSession, signIn }  from "next-auth/react"
import { useRouter} from "next/navigation";

const Login = () => {

    const { data,status } = useSession()
     const router = useRouter();

         if(status === "loading"){
         return <p>Loading...</p>
     }

     if( status === "authenticated"){
       router.push("/")
     }
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] p-4">
      {/* Box*/}
      <div className="flex flex-col h-full shadow-2xl rounded-md md:flex-row md:h-[80%] md:w-[70%] lg:w-[60%]">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/* FORM CONTAINER */}
        <div className="flex flex-col h-2/3 p-2 gap-4 md:w-1/2 md:p-4 md:gap-3">
          <h1 className="font-bold text-xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md items-center md:w-max" onClick={() => signIn("google")}>
            <Image src="/google.png" alt="" width={20} height={20} />
            <span>Sign in with Google</span>
          </button>
          <button className="flex items-center gap-4 ring-1 ring-blue-100 rounded-md p-4 md:w-max">
            <Image src="/facebook.png" alt="" width={20} height={20} />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm mb-10">
          Have a problem?<Link href="/" className="underline">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
