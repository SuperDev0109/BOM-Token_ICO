import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import Token from "../../components/token";
import NFT from "../../components/nft";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Buy() {
  const router = useRouter();
  const [kind, setKind] = useState(router.query.buyid);

  const [categories] = useState(["Token", "NFT"]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (kind === "token") {
      setSelectedIndex(0);
    } else if (kind === "nft") {
      setSelectedIndex(1);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="mt-40 flex">
        <div className="mx-auto w-full md:w-1/2 lg:w-1/3">
          <Tab.Group
            selectedIndex={selectedIndex}
            onChange={(i) => setSelectedIndex(i)}
          >
            <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl  max-w-400 mx-auto">
              {categories.map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 ",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-6 max-w-400 mx-auto">
              <Tab.Panel
                key={"Token"} 
                className={classNames(
                  "rounded-xl p-6",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 border border-1 border-white bg-blue-900/20"
                )}
              >
                <Token />
              </Tab.Panel>
              <Tab.Panel
                key={"NFT"}
                className={classNames(
                  "rounded-xl p-6",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 border border-1 border-white bg-blue-900/20"
                )}
              >
                <NFT />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <Footer />
    </>
  );
}
