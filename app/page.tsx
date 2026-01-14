import React from "react";
import Navbar from "@/src/components/navbar";

const page = () => {
  return (
    <div>
      <main className="z-0">
        <div className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg bg-white/30">
          <Navbar />
        </div>
      </main>
    </div>
  );
};

export default page;
