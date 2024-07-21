"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { formatDuration } from "../helpers/timeFormatter";
import DOMPurify from "isomorphic-dompurify";

const Home = () => {
  const [numPoles, setNumPoles] = useState(1);
  const [poleSize, setPoleSize] = useState(5);
  const [speed, setSpeed] = useState(4);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [result, setResult] = useState(null);
  const [tooltip, setTooltip] = useState({
    poleSize: { visible: false, left: 0 },
    speed: { visible: false, left: 0 },
  });

  const router = useRouter();

  const calculateDistance = () => {
    const duration = minutes * 60 + seconds;
    const distancePerPole = poleSize * speed * duration;
    const totalDistance = numPoles * distancePerPole;
    setResult(totalDistance);

    router.push(
      `/results?numPoles=${numPoles}&poleSize=${poleSize}&speed=${speed}&duration=${duration}&result=${totalDistance}`
    );
  };

  const handleSliderChange = (e, type) => {
    const value = parseInt(e.target.value, 10);
    const sliderWidth = e.target.offsetWidth;
    const knobPosition = (value / parseInt(e.target.max, 10)) * sliderWidth;

    if (type === "poleSize") {
      setPoleSize(value);
      setTooltip({
        ...tooltip,
        poleSize: { visible: true, left: knobPosition },
      });
    } else if (type === "speed") {
      setSpeed(value);
      setTooltip({
        ...tooltip,
        speed: { visible: true, left: knobPosition },
      });
    }
  };

  const hideTooltip = (type) => {
    setTooltip({ ...tooltip, [type]: { ...tooltip[type], visible: false } });
  };

  const resetValues = () => {
    setNumPoles(1);
    setPoleSize(5);
    setSpeed(1);
    setMinutes(0);
    setSeconds(0);
    setResult(null);
  };

  const secondsOptions = [...Array.from({ length: 16 }, (_, i) => i), 30, 45];

  return (
    <div className="container mx-auto flex justify-center flex-col items-center pb-80 bg-[#fffdd6]">
      <h1 className="text-7xl font-bold mb-4 text-center">
        Female Mileage Calculator
      </h1>
      <Image
        src="/assets/mileage.png"
        alt="main"
        width={500}
        height={300}
        className="mb-4"
      />
      <h2 className="text-xl font-bold mb-4 text-center">
        How to find out the mileage of a woman&apos;s body count
      </h2>
      <p className="text-lg mb-4 text-center">
        Using Data From the <span className="font-bold">NIH</span>
      </p>
      <div className="my-2 p-10 w-full border border-yellow-300 bg-yellow-300 rounded">
        <label className="flex justify-center mb-10 text-3xl">Body Count</label>
        <div className="flex justify-center w-full">
          <input
            type="number"
            value={numPoles}
            min="1"
            onChange={(e) => setNumPoles(e.target.value)}
            className="border p-2 w-1/3 rounded text-center"
          />
        </div>
      </div>
      {isAdvanced && (
        <>
          <div className="my-2 p-10 w-full border border-yellow-300 bg-yellow-300 rounded relative">
            <label className="flex justify-center mb-10 text-3xl">
              DICK SIZE
            </label>
            {tooltip.poleSize.visible && (
              <div
                className="absolute bg-blue-500 text-white p-1 rounded"
                style={{
                  left: `${tooltip.poleSize.left}px`,
                  bottom: "4rem",
                  transform: "translateX(-50%)",
                }}
              >
                {poleSize} inches
              </div>
            )}
            <input
              type="range"
              min="2"
              max="19"
              value={poleSize}
              onChange={(e) => handleSliderChange(e, "poleSize")}
              onMouseEnter={(e) => handleSliderChange(e, "poleSize")}
              onMouseLeave={() => hideTooltip("poleSize")}
              className="slider w-full"
            />
          </div>
          <div className="my-1 p-10 w-full border border-yellow-300 bg-yellow-300 rounded relative">
            <label className="flex justify-center mb-10 text-3xl">SPEED</label>
            {tooltip.speed.visible && (
              <div
                className="absolute bg-blue-500 text-white p-1 rounded"
                style={{
                  left: `${tooltip.speed.left}px`,
                  bottom: "4rem",
                  transform: "translateX(-50%)",
                }}
              >
                {speed} {speed === 1 ? "stroke" : "strokes"}/sec
              </div>
            )}
            <input
              type="range"
              min="1"
              max="10"
              value={speed}
              onChange={(e) => handleSliderChange(e, "speed")}
              onMouseEnter={(e) => handleSliderChange(e, "speed")}
              onMouseLeave={() => hideTooltip("speed")}
              className="slider w-full"
            />
          </div>
          <div className="my-1 p-10 w-full border border-yellow-300 bg-yellow-300 rounded relative">
            <label className="flex justify-center mb-10 text-3xl">
              DURATION
            </label>
            <div className="flex justify-center space-x-4">
              <div>
                <label className="block text-center">Minutes</label>
                <select
                  value={minutes}
                  onChange={(e) => setMinutes(parseInt(e.target.value, 10))}
                  className="border p-2 rounded"
                >
                  {Array.from({ length: 61 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-center">Seconds</label>
                <select
                  value={seconds}
                  onChange={(e) => setSeconds(parseInt(e.target.value, 10))}
                  className="border p-2 rounded"
                >
                  {secondsOptions.map((sec) => (
                    <option key={sec} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="flex justify-center items-center flex-col space-y-2 w-full">
        <button
          onClick={calculateDistance}
          className="bg-yellow-500 text-white py-2 px-4 rounded w-full"
        >
          WHAT&apos;S THE MILEAGE
        </button>
        <button
          onClick={() => setIsAdvanced(!isAdvanced)}
          className="bg-yellow-500 text-white py-2 px-4 rounded w-full"
        >
          {isAdvanced ? "BASIC" : "ADVANCED"}
        </button>
        <button
          onClick={resetValues}
          className="bg-red-500 text-white py-2 px-4 rounded w-full"
        >
          RESET
        </button>
      </div>
      {result && (
        <div
          className="mt-4 text-lg"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(`Total Distance: ${result} inches`),
          }}
        />
      )}
    </div>
  );
};

export default Home;
