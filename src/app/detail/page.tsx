import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const Detail = () => {
  return (
    <div>
      <Header />
      <div className="detail container mx-auto px-20 pt-20">
        <Link href="/countries" className="flex items-center gap-2">
          <FaArrowLeftLong />
          <p>Back</p>
        </Link>
        <div className="country flex justify-around items-center flex-wrap pt-20 gap-y-5">
          <Image src="/Germany.png" width={560} height={400} alt="Germany" />
          <div className="texts flex items-center justify-between flex-wrap w-2/4">
            <div className="left">
              <h1 className="text-4xl font-bold pb-2">Germany</h1>
              <p>
                <span className="font-semibold">Native Name: </span>
                Bundesrepublik Deutschland
              </p>
              <p className="py-1">
                <span className="font-semibold">Population:</span>
                83,240,525
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                Europe
              </p>
              <p className="py-1">
                <span className="font-semibold">Sub Region: </span>
                Western Europe
              </p>
              <p>
                <span className="font-semibold">Capital:</span>
                Berlin
              </p>
            </div>
            <div className="right">
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                .de
              </p>
              <p className="py-1">
                <span className="font-semibold">Currencies: </span>
                EUR
              </p>
              <p>
                <span className="font-semibold">Language: </span>
                Dutch, French, German
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <strong>Border Countries: </strong>
              <button className="bg-gray-300 hover:bg-gray-400 px-4 rounded transition-transform">
                Netherlands
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 px-4 rounded transition-transform">
                Belgium
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 px-4 rounded transition-transform">
                Luxembourg
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 px-4 rounded transition-transform">
                France
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
