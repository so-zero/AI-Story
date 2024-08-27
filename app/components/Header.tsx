import React from "react";
import Link from "next/link";
import { LibraryIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b shadow-sm">
      <div className="max-w-7xl mx-auto p-8 flex justify-between items-center">
        <h1 className="text-xl md:text-3xl font-bold">
          <Link href="/">AI Story</Link>
        </h1>
        <div>
          <Link href="/library">
            <LibraryIcon className="size-5 md:size-7" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
