import Forms from "@/components/Forms";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <Forms />
      <Link href="/dashboard/new">
        Go to New
      </Link>
    </div>
  );
}

export default page;
