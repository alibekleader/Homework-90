import Actions from "@/components/actions";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const Countries = () => {
  return (
    <div className="bg-teal-50">
      <Header />
      <Actions />
      <div className="flex container-sm pt-10 mx-20 gap-10  justify-around items-center flex-wrap">
        <Link href="/detail">
          <div className="bg-white rounded-lg shadow-md">
            <Image src="/Germany.png" width={267} height={160} alt="Germany" />
            <div className="p-6">
              <h1 className="text-2xl font-semibold">Germany</h1>
              <p className="pt-3">
                <span className="font-semibold">Population: </span>
                81,770,900
              </p>
              <p className="py-1">
                <span className="font-semibold">Region: </span>
                Europe:
              </p>
              <p className="py-1">
                <span className="font-semibold">Capital: </span>
                Berlin:
              </p>
            </div>
          </div>
        </Link>

        <Link href="/detail">
          <div className="bg-white rounded-lg shadow-md">
            <Image src="/USA.png" width={267} height={160} alt="Germany" />
            <div className="p-6">
              <h1 className="text-1xl font-semibold">United States America</h1>
              <p className="pt-3">
                <span className="font-semibold">Population: </span>
                323,947,000
              </p>
              <p className="py-1">
                <span className="font-semibold">Region: </span>
                Americas
              </p>
              <p className="py-1">
                <span className="font-semibold">Capital: </span>
                Washington, D.C.
              </p>
            </div>
          </div>
        </Link>

        <Link href="/detail">
          <div className="bg-white rounded-lg shadow-md">
            <Image src="/Brazil.png" width={267} height={160} alt="Germany" />
            <div className="p-6">
              <h1 className="text-2xl font-semibold">Brazil</h1>
              <p className="pt-3">
                <span className="font-semibold">Population: </span>
                206,135,893
              </p>
              <p className="py-1">
                <span className="font-semibold">Region: </span>
                Americas
              </p>
              <p className="py-1">
                <span className="font-semibold">Capital: </span>
                Brasília
              </p>
            </div>
          </div>
        </Link>

        <Link href="/detail">
          <div className="bg-white rounded-lg shadow-md">
            <Image src="/Iceland.png" width={267} height={160} alt="Germany" />
            <div className="p-6">
              <h1 className="text-2xl font-semibold">Iceland</h1>
              <p className="pt-3">
                <span className="font-semibold">Population: </span>
                334,300
              </p>
              <p className="py-1">
                <span className="font-semibold">Region: </span>
                Europe:
              </p>
              <p className="py-1">
                <span className="font-semibold">Capital: </span>
                Reykjavík
              </p>
            </div>
          </div>
        </Link>

        <Link href="/detail">
          <div className="bg-white rounded-lg shadow-md">
            <Image
              src="/Afganistan.png"
              width={267}
              height={160}
              alt="Afganistan"
            />
            <div className="p-6">
              <h1 className="text-2xl font-semibold">Afganistan</h1>
              <p className="pt-3">
                <span className="font-semibold">Population: </span>
                27,657,145
              </p>
              <p className="py-1">
                <span className="font-semibold">Region: </span>
                Asia
              </p>
              <p className="py-1">
                <span className="font-semibold">Capital: </span>
                Kabul
              </p>
            </div>
          </div>
        </Link>

        <Link href="/detail">
          <div className="bg-white rounded-lg shadow-md">
            <Image src="/Aland.png" width={267} height={160} alt="Aland" />
            <div className="p-6">
              <h1 className="text-2xl font-semibold">Aland Islands</h1>
              <p className="pt-3">
                <span className="font-semibold">Population: </span>
                28,875
              </p>
              <p className="py-1">
                <span className="font-semibold">Region: </span>
                Europe:
              </p>
              <p className="py-1">
                <span className="font-semibold">Capital: </span>
                Mariehamn
              </p>
            </div>
          </div>
        </Link>

        <Link href="/detail">
          <div className="bg-white rounded-lg shadow-md">
            <Image
              src="/Alband.png"
              width={267}
              height={160}
              alt="Afganistan"
            />
            <div className="p-6">
              <h1 className="text-2xl font-semibold">Albania</h1>
              <p className="pt-3">
                <span className="font-semibold">Population: </span>
                2,886,026
              </p>
              <p className="py-1">
                <span className="font-semibold">Region: </span>
                Europe
              </p>
              <p className="py-1">
                <span className="font-semibold">Capital: </span>
                Tirana
              </p>
            </div>
          </div>
        </Link>

        <Link href="/detail">
          <div className="bg-white rounded-lg shadow-md">
            <Image src="/Algeria.png" width={267} height={160} alt="Algeria" />
            <div className="p-6">
              <h1 className="text-2xl font-semibold">Algeria</h1>
              <p className="pt-3">
                <span className="font-semibold">Population: </span>
                40,400,000
              </p>
              <p className="py-1">
                <span className="font-semibold">Region: </span>
                Africa
              </p>
              <p className="py-1">
                <span className="font-semibold">Capital: </span>
                Algiers
              </p>
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Countries;
