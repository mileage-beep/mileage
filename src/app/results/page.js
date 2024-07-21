// src/app/results/page.js

import React, { Suspense } from "react";
import ResultsContent from "./ResultsContent";

export const dynamic = "force-dynamic";

export default function Results() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
