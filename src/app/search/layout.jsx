import SearchHeader from "../comonents/SearchHeader";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function SearchLayout({ children }) {
  return (
      <div className={inter.className}>
        <SearchHeader/>
        {children}
        {/* Footer */}
      </div>
  );
}
