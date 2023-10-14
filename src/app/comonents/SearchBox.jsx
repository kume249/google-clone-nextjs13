"use client"; // 追記
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") || "";
  const [input, setInput] = useState(searchTerm);
  const router = useRouter();
  // useEffect(()=>{
  //   console.log("searchTerm",searchTerm)
  //   setInput(searchTerm)
  // },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center 
    mt mx-auto max-w-[90%] 
    border border-gray-200 px-5 py-3 
    rounded-full hover:shadow-md focus-within:shadow-md 
    transition-shadow sm:max-w-xl lg:max-w-2xl"
    >
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="bg-transparent 
      focus:outline-none w-full"
      />
      <RxCross2
        onClick={() => setInput("")}
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-4" />
      <AiOutlineSearch onClick={handleSubmit} className=" hidden sm:inline-flex text-4xl  text-blue-500 cursor-pointer pl-4" />
    </form>
  );
}
