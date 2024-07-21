// src/app/results/ResultsContent.js

"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { convertInchesToLargestUnit } from "@/helpers/convertInches";
import { getDynamicAnalogy } from "@/helpers/getDynamicAnalogy";
import { getCarCondition } from "@/helpers/getCarCondition";
import DOMPurify from "isomorphic-dompurify";

const ResultsContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [state, setState] = useState(null);

  useEffect(() => {
    if (searchParams) {
      setState({
        numPoles: Number(searchParams.get("numPoles")),
        poleSize: Number(searchParams.get("poleSize")),
        speed: Number(searchParams.get("speed")),
        duration: Number(searchParams.get("duration")),
        result: Number(searchParams.get("result")),
      });
    }
  }, [searchParams]);

  if (!state) return <div>Loading...</div>;

  const { numPoles, poleSize, speed, duration, result } = state;

  const score = (numPoles, result) => {
    if (numPoles >= 1 && numPoles <= 2) return 1;
    if (numPoles >= 3 && numPoles <= 4) return 2;

    if (numPoles >= 5 && numPoles <= 7) {
      if (result > 15000) return 5;
      if (result > 10000) return 4.5;
      if (result > 5000) return 4;
      return 3;
    }

    if (numPoles >= 8 && numPoles <= 10) {
      if (result > 30000) return 8;
      if (result > 20000) return 7.5;
      if (result > 10000) return 7;
      return 6;
    }

    if (numPoles >= 11 && numPoles <= 14) return 9;
    if (numPoles >= 15) return 10;

    return 2;
  };

  const getImageByScore = (score) => {
    if (score >= 1 && score <= 2) return "/assets/green.png";
    if (score >= 3 && score <= 4) return "/assets/yellow.png";
    if (score >= 5 && score <= 6) return "/assets/middle.png";
    if (score >= 7 && score <= 8) return "/assets/orange.png";
    if (score >= 9 && score <= 10) return "/assets/red.png";
    return null;
  };

  const { miles, feet, remainingInches } = convertInchesToLargestUnit(result);
  const calculatedScore = score(numPoles, result);
  const displayScore =
    calculatedScore % 1 === 0 ? calculatedScore : calculatedScore.toFixed(1);

  const analogy = DOMPurify.sanitize(getDynamicAnalogy(result));
  const carCondition = DOMPurify.sanitize(getCarCondition(calculatedScore));

  const formatDuration = (minutes, seconds) => {
    const minutesText =
      minutes > 0 ? `${minutes} minute${minutes === 1 ? "" : "s"}` : "";
    const secondsText = `${seconds} second${seconds === 1 ? "" : "s"}`;
    return `${minutesText} ${secondsText}`.trim();
  };

  const imageSrc = getImageByScore(calculatedScore);

  return (
    <div className="container mx-auto flex flex-col items-center py-20 bg-[#fffdd6] min-h-screen text-center">
      <h1 className="text-7xl font-bold mb-10">THE MILEAGE</h1>
      <h2 className="text-3xl font-bold mb-4">Settings</h2>
      <div className="mb-4 w-full border border-yellow-300 bg-yellow-300 rounded p-4 text-left">
        <p>Body Count: {numPoles}</p>
        <p>Dick Size: {poleSize} inches</p>
        <p>Speed: {speed} strokes/sec</p>
        <p>
          Duration: {formatDuration(Math.floor(duration / 60), duration % 60)}
        </p>
      </div>
      <h2 className="text-3xl font-bold mb-4">Mileage</h2>
      <div className="mb-4 w-full border border-yellow-300 bg-yellow-300 rounded p-4">
        <p className="text-3xl">
          {miles > 0 ? `${miles} mile${miles > 1 ? "s" : ""} ` : ""}
          {feet > 0 ? `${feet} ${feet > 1 ? "feet" : "foot"} ` : ""}
          {remainingInches > 0
            ? `${remainingInches} inch${remainingInches > 1 ? "es" : ""}`
            : ""}
        </p>
        <p
          className="italic mt-2"
          dangerouslySetInnerHTML={{ __html: analogy }}
        />
      </div>
      <h2 className="text-3xl font-bold mb-4">Score</h2>
      <div className="mb-4 w-full border border-yellow-300 bg-yellow-300 rounded p-4">
        <p className="text-4xl mt-5 font-bold">{displayScore}</p>
        <div className="flex justify-center">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="Car condition"
              width={200}
              height={100}
              className="mb-4"
            />
          )}
        </div>
        <p
          className="italic mt-2"
          dangerouslySetInnerHTML={{ __html: carCondition }}
        />
      </div>
      <h2 className="text-3xl font-bold mb-4">Disclaimer</h2>
      <div className="mb-4 w-full border border-yellow-300 bg-yellow-300 rounded p-4">
        <p className="italic my-2">
          The default settings are based on averages from the{" "}
          <span className="font-bold">NIH</span>. Calculated results also are
          from only one session per body. It does not include multiple sessions
          with one person. Score is mainly based on body count and not
          necessarily the mileage itself.
        </p>
      </div>
      <button
        onClick={() => router.push("/")}
        className="bg-yellow-300 text-black py-4 px-4 rounded mt-4 w-full font-bold"
      >
        New Search
      </button>
    </div>
  );
};

export default ResultsContent;
