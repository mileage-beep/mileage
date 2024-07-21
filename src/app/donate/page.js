"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const QRCode = dynamic(() => import("qrcode.react"), { ssr: false });

const Donate = () => {
  const bitcoinAddress = "bc1qrty726lv3sdr2dhu23vl6kg8mkt7halvc3rag5";
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center py-20 bg-[#fffdd6] min-h-screen text-center">
      <h1 className="text-7xl font-bold mb-10">Donate Bitcoin</h1>
      <div className="mb-4 w-full border border-yellow-300 bg-yellow-300 rounded p-4 text-left">
        <p className="text-2xl mb-4 text-center">
          Every donation helps a woman realize the importance of body count.
        </p>
        <p className="text-2xl font-mono mb-4 break-words text-center">
          {bitcoinAddress}
        </p>
        <div className="flex justify-center mb-4">
          {isMounted && <QRCode value={bitcoinAddress} size={256} />}
        </div>
        <p className="text-xl text-center">
          Scan the QR code to donate Bitcoin
        </p>
      </div>
    </div>
  );
};

export default Donate;
