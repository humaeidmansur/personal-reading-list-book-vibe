"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Book } from "../component/shared/Type";
import {
  getSavedBooks,
  removeAllBooks,
} from "../component/shared/BookStored";

type SortOption = "rating" | "pages" | "year";
type BookListType = "read" | "wishlist";
type LoadStatus = "loading" | "error" | "success";

export default function ListedBooksPage() {
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState<BookListType>(() => {
    const tab = searchParams.get("tab");
    return tab === "wishlist" || tab === "read" ? tab : "read";
  });

  const [readBooks, setReadBooks] = useState<Book[]>([]);
  const [wishlistBooks, setWishlistBooks] = useState<Book[]>([]);
  const [sortBy, setSortBy] = useState<SortOption | "">("");
  const [status, setStatus] = useState<LoadStatus>("loading");

  const loadBooks = useCallback(() => {
    setStatus("loading");

    window.setTimeout(() => {
      try {
        setReadBooks(getSavedBooks("read"));
        setWishlistBooks(getSavedBooks("wishlist"));
        setStatus("success");
      } catch {
        setStatus("error");
      }
    }, 500);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStatus("error");
    }, 800);

    return () => window.clearTimeout(timer);
  }, []);

  const books = activeTab === "read" ? readBooks : wishlistBooks;

  const sortedBooks = [...books].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "pages") return b.totalPages - a.totalPages;

    if (sortBy === "year") {
      return b.yearOfPublishing - a.yearOfPublishing;
    }

    return 0;
  });

  const handleRemoveAll = () => {
    try {
      removeAllBooks(activeTab);

      if (activeTab === "read") {
        setReadBooks([]);
      } else {
        setWishlistBooks([]);
      }
    } catch {
      window.alert("Unable to remove books. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-white px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-900">
          Listed Books
        </h1>

        {status === "loading" && (
          <div
            role="status"
            className="flex min-h-64 flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 p-8 text-center"
          >
            <span className="loading loading-spinner loading-lg text-green-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Loading your reading list...
            </h2>
            <p className="text-sm text-slate-500">
              Please wait while we retrieve your saved books.
            </p>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="my-8 rounded-xl border border-red-200 bg-red-50 px-6 py-12 text-center"
          >
            <h2 className="text-xl font-bold text-red-700">
              Unable to Load Reading List
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm text-slate-700">
              We couldn&apos;t load your reading list. Please try again.
            </p>

            <button
              type="button"
              onClick={loadBooks}
              className="mt-5 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Try Again
            </button>
          </div>
        )}

        {status === "success" && (
          <>
            <div className="mb-10 flex justify-center">
              <select
                aria-label="Sort books"
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as SortOption | "")
                }
                className="cursor-pointer rounded-lg bg-green-600 p-4 pr-8 font-medium text-white outline-none transition hover:bg-green-700"
              >
                <option value="">Sort By</option>
                <option value="rating">Rating</option>
                <option value="pages">Number of pages</option>
                <option value="year">Publisher year</option>
              </select>
            </div>

            <div className="mb-6 flex border-b border-slate-200">
              <button
                type="button"
                onClick={() => setActiveTab("read")}
                className={`rounded-t-lg border px-5 py-3 text-sm font-medium transition ${
                  activeTab === "read"
                    ? "border-slate-300 bg-white text-slate-900"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                Read Books ({readBooks.length})
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("wishlist")}
                className={`rounded-t-lg border px-5 py-3 text-sm font-medium transition ${
                  activeTab === "wishlist"
                    ? "border-slate-300 bg-white text-slate-900"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                Wishlist Books ({wishlistBooks.length})
              </button>
            </div>

            <div className="mb-5 flex justify-end">
              <button
                type="button"
                onClick={handleRemoveAll}
                disabled={books.length === 0}
                className="rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Remove All
              </button>
            </div>

            <div className="space-y-5">
              {sortedBooks.length > 0 ? (
                sortedBooks.map((book) => (
                  <article
                    key={book.bookId}
                    className="flex flex-col gap-5 rounded-xl border border-slate-200 p-4 transition hover:shadow-md sm:flex-row sm:items-center sm:p-5"
                  >
                    <div className="flex h-48 shrink-0 items-center justify-center rounded-lg bg-slate-50 p-4 sm:h-44 sm:w-44">
                      <div className="relative h-full w-full">
                        <Image
                          src={book.image}
                          alt={book.bookName}
                          fill
                          sizes="176px"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl font-bold text-slate-900">
                        {book.bookName}
                      </h2>

                      <p className="mt-2 text-sm text-slate-500">
                        By: {book.author}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                        <span className="font-semibold text-slate-700">
                          Tags:
                        </span>

                        {book.tags.map((tag) => (
                          <span key={tag} className="text-emerald-600">
                            #{tag}
                          </span>
                        ))}

                        <span className="text-slate-500">
                          Year: {book.yearOfPublishing}
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
                        <span>Publisher: {book.publisher}</span>
                        <span>Pages: {book.totalPages}</span>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">
                        <span className="rounded-full bg-sky-50 px-4 py-2 text-sm text-sky-700">
                          Category: {book.category}
                        </span>

                        <span className="rounded-full bg-amber-50 px-4 py-2 text-sm text-amber-700">
                          Rating: {book.rating}
                        </span>

                        <Link
                          href={`/books/${book.bookId}`}
                          className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="rounded-xl border border-dashed border-slate-300 py-16 text-center">
                  <h2 className="text-xl font-semibold text-slate-800">
                    {activeTab === "read"
                      ? "No read books yet"
                      : "Your wishlist is empty"}
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Your reading list helps you keep track of books you have
                    read or want to read. Explore the collection to add your
                    first book.
                  </p>

                  <Link
                    href="/books"
                    className="mt-5 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
                  >
                    Explore Books
                  </Link>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
}