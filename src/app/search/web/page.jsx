"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
export default function WebSearchPage() {
  const [result, setResult] = useState([]);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") || "";

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchTerm}}`
    )
      .then((res) => res.json())
      .then((data) => setResult(data.items))
      .catch((error) => {
        console.error("通信に失敗しました", error);
        throw new Error("Something went wrong");
      });
    // const tmpFunc = async () => {
    //   const response = await fetch(
    //     `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=lectures`
    //   );

    //   const data = await response.json();
    //   console.log("data", data.items);
    // };

    // tmpFunc();
  }, [searchTerm]);
  if (!result)
    return (
      <div className="flex flex-col items-center pt-10">
        <h1 className="text-3xl mb-4">No results found. </h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage.{"   "}
          <Link className="text-blue-500" href="/">Home</Link>
        </p>
      </div>
    );
  return <>{result && result.map((item) => <h1>{item.title}</h1>)}</>;
}
