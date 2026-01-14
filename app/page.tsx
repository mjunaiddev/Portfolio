import React from "react";
import Navbar from "@/src/components/navbar";
import Hero from "./(home)/hero";

const page = () => {
  return (
    <div>
      <main className="z-0">
        <div className="fixed inset-x-0 top-0 z-50  bg-white">
          <Navbar />
        </div>
        <Hero/>
      </main>
    </div>
  );
};

export default page;
