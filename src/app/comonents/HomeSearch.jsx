"use client"; // 追記
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidMicrophone } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    console.log("input", input);
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async (e) => {
    if (loading) return;
    setLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    console.log("response", response);
    router.push(`/search/web?searchTerm=${response}`);
    setLoading(false);
  };

  // useEffect(()=>{
  //     console.log(input)
  // },[input])

  console.log(input);

  return (
    <>
      <div className="flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-4/12 items-center mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
        >
          <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            className="bg-transparent focus:outline-none w-full"
          />
          <BiSolidMicrophone className="text-lg text-gray-500" />
        </form>
        <div className="flex gap-4 items-center mt-5">
          <button onClick={handleSubmit} className="btn">
            Google Search
          </button>
          <button disable={loading} onClick={randomSearch} className="btn flex items-center justify-center disabled:opacity-80">
            {loading ? <img className="h-6 text-center" src={"Spinner.svg"} alt="loading..."/>:"I Am Feeling Lucky"}
          </button>
        </div>
      </div>
    </>
  );
}
