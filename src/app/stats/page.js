"use client";

import React from "react";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";

const Stats = () => {
  const sanitizedContent1 = DOMPurify.sanitize(`
    National Library of Medicine Erect penile length and circumference
    dimensions of 1,661 sexually active men in the United States (2013)
  `);
  const sanitizedContent2 = DOMPurify.sanitize(`
    National Library of Medicine A multinational population survey of
    intravaginal ejaculation latency time (2005)
  `);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-7xl font-bold mb-4 text-center">
        Statistics Sources
      </h1>
      <h2 className="text-xl font-semibold mb-4">
        Where is this data coming from?
      </h2>
      <div className="mb-4 w-full border border-yellow-300 bg-yellow-300 rounded p-4">
        <p className="py-5 text-center">
          <span className="font-bold text-yellow-600">
            Female Mileage Calculator
          </span>{" "}
          uses data from two sources:
        </p>
        <StatSource
          content={sanitizedContent1}
          imageSrc="/assets/study2.png"
          altText="Study 2 image"
        />
        <StatSource
          content={sanitizedContent2}
          imageSrc="/assets/study1.png"
          altText="Study 1 image"
        />
      </div>
    </div>
  );
};

const StatSource = ({ content, imageSrc, altText }) => (
  <div className="py-5 text-center">
    <p>
      Average{" "}
      {content.includes("penis") ? "length of the human penis" : "sex duration"}{" "}
      is derived from{" "}
      <span
        className="font-bold text-yellow-600"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </p>
    <div className="flex justify-center">
      <Image
        src={imageSrc}
        alt={altText}
        width={500}
        height={300}
        className="my-2"
      />
    </div>
  </div>
);

export default Stats;
