"use client";

import { useEffect } from "react";

export default function BooksError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Books page error:", error);
  }, [error]);

  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <h2 className="text-2xl font-bold text-red-600">
        Unable to Load Books
      </h2>

      <p className="mt-3 max-w-md text-slate-600">
        We couldn't load the books. Please check your internet connection
        and try again.
      </p>

      <button
        onClick={() => reset()}
        className="btn btn-primary mt-5"
      >
        Try Again
      </button>
    </section>
  );
}