import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="text-center pt-10">
      <h1 className="text-5xl font-bold">Home Page</h1>
      <button className="bg-blue-500 text-2xl transition-all mt-40 hover:bg-blue-900 text-white font-bold py-4 px-6 rounded-full">
        <Link href="countries">Get Start</Link>
      </button>
    </div>
  );
};

export default Home;
