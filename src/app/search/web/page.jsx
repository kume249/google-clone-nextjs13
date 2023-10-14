"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
export default function WebSearchPage() {
  const [result, setResult] = useState([]);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") || "";

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchTerm}}`
    )
      .then((res) => res.json())
      .then((data) => setResult(data.items));

    // const tmpFunc = async () => {
    //   const response = await fetch(
    //     `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=lectures`
    //   );

    //   const data = await response.json();
    //   console.log("data", data.items);
    // };

    // tmpFunc();
  }, [searchTerm]);

  return <>{result && result.map((item) => <h1>{item.title}</h1>)}</>;
}
