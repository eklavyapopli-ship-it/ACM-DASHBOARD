"use client";

import React, { useState, useEffect } from "react";
import { BookCheck } from "lucide-react";

interface ResourceItem {
  _id: string;
  name: string;
  link: string;
}

interface ResourcesProps {
  limit?: number; // optional prop to limit number of cards
}

const Resources: React.FC<ResourcesProps> = ({ limit }) => {
  const [data, setData] = useState<ResourceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        
        const json = await res.json();

        if (Array.isArray(json)) {
          setData(json);
        } else {
          console.warn("Expected array, got:", json);
          setData([]);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading data...</p>;

  // if limit is passed, slice the data
  const displayedData = limit ? data.slice(0, limit) : data;

  return (
    <section className="mt-20">
      <div>
        <h1 className="text-2xl text-white font-bold flex place-content-center place-items-center gap-10">
          <div>
            <BookCheck size={30} />
          </div>
          KSS RESOURCES
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 place-items-center">
        {displayedData.map((item) => (
          <a
            href={item.link}
            className="w-full"
            key={item._id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="md:flex place-items-center md:place-content-start place-content-center bg-white h-30 text-black font-bold rounded-2xl m-5 p-3 hover:scale-[1.02] transition-transform">
              <div className="w-20 flex place-content-center place-items-center">
                <BookCheck />
              </div>
              <div className="w-fit flex place-items-center lg:text-lg text-sm text-center">
                {item.name}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Resources;
