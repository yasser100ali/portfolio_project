"use client";

import { Button } from "./ui/button";
import { GitIcon } from "./icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="p-2 flex flex-row gap-2 justify-between">
      <Link href="https://github.com/yasser100ali">
        <Button variant="outline">
          <GitIcon /> Github
        </Button>
      </Link>

    </div>
  );
};
