"use client";


import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const session = useSession(); 
  return (
    <div className="text-xl">
      <button onClick={()=> signIn()}>
        signin
      </button>

      <div>
        {JSON.stringify(session.data?.user)}
      </div>
    </div>
  );
}
