"use client"; // 追記
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoImagesOutline } from "react-icons/io5";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function SearchHeaderOptions() {
  const [isAll, setIsAll] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") || "";
  const handleClick = () => {
    router.push(
      `${
        pathname === "/search/web"
          ? "/search/image?searchTerm="
          : "/search/web?searchTerm="
      }${searchTerm}`
    );
    setIsAll(!isAll);
  };

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        onClick={handleClick}
        className={`flex space-x-1  cursor-pointer  ${
          pathname === "/search/web"
            ? "border-b-4 border-blue-600 text-blue-600"
            : " text-gray-500"
        }`}
      >
        <AiOutlineSearch className="text-xl" />
        <p>All</p>
      </div>
      <div
        onClick={handleClick}
        className={`flex space-x-1 cursor-pointer ${
          pathname !== "/search/web"
            ? "border-b-4  border-blue-600 text-blue-600"
            : " text-gray-500"
        }`}
      >
        <IoImagesOutline className="text-xl" />
        <p>Image</p>{" "}
      </div>
    </div>
  );
}
