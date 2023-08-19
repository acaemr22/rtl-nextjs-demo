"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">Counter:</h1>
      <p className="text-2xl">{count}</p>
      <div className="flex gap-2 py-5">
        <button
          className="bg-green-400"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Inc
        </button>
        <button
          className="bg-green-400"
          data-testid="dec-button"
          onClick={() => setCount((prev) => prev - 1)}
        >
          Dec
        </button>
      </div>
    </main>
  );
}
