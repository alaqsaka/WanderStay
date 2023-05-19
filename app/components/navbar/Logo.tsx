"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      className="rose_gradient text-xl md:text-2xl font-[850] cursor-pointer"
      onClick={() => router.push("/")}
    >
      WanderStay
    </div>
  );
};

export default Logo;
