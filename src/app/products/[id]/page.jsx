"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const router = useRouter();
  const x = useParams();
  console.log(x);

  return <div>Hello Testing</div>;
};

export default Page;
