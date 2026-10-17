"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { saveBook } from "../component/shared/BookStored";

export default function BookActions({ book }) {
  const router = useRouter();

  const [showDescription, setShowDescription] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleRead = () => {
    setShowDescription((previous) => !previous);
    setShowMessage(false);
  };

  const handleWishlist = () => {
    try {
      const added = saveBook(book, "wishlist");

      if (added) {
        toast.success("Your book has been added to your wishlist!");
      } else {
        toast.info("This book is already in your wishlist.");
      }
    } catch {
      toast.error("Unable to add this book. Please try again.");
    }
  };

  return (
    <div>
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 pt-3">
        <button
          type="button"
          onClick={handleRead}
          aria-expanded={showDescription}
          className="rounded-lg border border-slate-300 px-7 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          {showDescription ? "Hide Description" : "Read"}
        </button>

        <button
          type="button"
          onClick={handleWishlist}
          className="rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-white transition hover:bg-cyan-600"
        >
          Wishlist
        </button>
      </div>

      {/* Book Description */}
      {showDescription && (
        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-lg font-bold text-slate-800">
            About This Book
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {book.description ||
              "A description of this book is coming soon."}
          </p>

          <button
            type="button"
            onClick={() => setShowMessage(true)}
            className="mt-4 rounded-lg bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-700"
          >
            Learn More...
          </button>

          {showMessage && (
            <p
              role="status"
              className="mt-4 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-700"
            >
              We are working on it, thank you for your patience.
            </p>
          )}
        </div>
      )}
    </div>
  );
}