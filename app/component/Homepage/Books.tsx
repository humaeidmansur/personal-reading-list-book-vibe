import BookCard from "../shared/BookCard";
import Link from "next/link";
import type { Book } from "../shared/Type";
import { readFile } from "node:fs/promises";
import path from "node:path";

const getBooks = async (): Promise<Book[]> => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "booksData.json"
  );

  const fileContents = await readFile(filePath, "utf8");

  return JSON.parse(fileContents) as Book[];
};

export default async function Books() {
  let books: Book[];

  try {
    books = await getBooks();
  } catch (error) {
    console.error("Failed to load books:", error);

    return (
      <section className="container mx-auto flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
        <h2 className="text-2xl font-bold text-red-600">
          Unable to Load Books
        </h2>

        <p className="mt-3 text-slate-600">
          We couldn&apos;t load the books. Please try again.
        </p>

        <Link href="/books" className="btn btn-primary mt-5">
          Try Again
        </Link>
      </section>
    );
  }

  if (books.length === 0) {
    return (
      <section className="container mx-auto flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          No Books Found
        </h2>

        <p className="mt-3 text-slate-500">
          Our book collection is currently empty. Please check back later.
        </p>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Explore Our Collection
        </p>

        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Popular Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Discover your next favorite book from our carefully selected
          collection of classics, fiction, fantasy, mystery, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
}