
import Image from "next/image";
import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import path from "node:path";
import BookAdd from "../../component/BookAdd";

async function getBooks() {
  const filePath = path.join(process.cwd(), "public", "booksData.json");
  const fileContents = await readFile(filePath, "utf8");

  return JSON.parse(fileContents);
}

export default async function BookDetails({ params }) {
  const { id } = await params;
  const books = await getBooks();

  const book = books.find((item) => String(item.bookId) === String(id));

  if (!book) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-white py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Book Image */}
          <div className="flex justify-center">
            <div className="flex h-[420px] w-full max-w-md items-center justify-center rounded-2xl bg-slate-50 p-6 sm:h-[520px] sm:p-8">
              <div className="relative h-full w-full">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-5">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                {book.bookName}
              </h1>

              <p className="mt-3 text-slate-500">
                By:{" "}
                <span className="font-medium text-slate-800">
                  {book.author}
                </span>
              </p>
            </div>

            <div className="border-y border-slate-200 py-4">
              <p className="font-medium text-slate-700">{book.category}</p>
            </div>

            {/* Review */}
            <div>
              <h2 className="mb-2 font-bold text-slate-900">Review:</h2>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {book.review}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-semibold text-slate-800">Tags:</span>

              {(book.tags ?? []).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Book Information */}
            <div className="space-y-4 border-t border-slate-200 pt-5">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <span className="text-slate-500">Number of Pages:</span>
                <span className="font-semibold">{book.totalPages}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <span className="text-slate-500">Publisher:</span>
                <span className="font-semibold">{book.publisher}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <span className="text-slate-500">Year of Publishing:</span>
                <span className="font-semibold">{book.yearOfPublishing}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <span className="text-slate-500">Rating:</span>
                <span className="font-semibold">★ {book.rating}</span>
              </div>
            </div>

            {/* Read and Wishlist Buttons */}
            <BookAdd book={book} />
          </div>
        </div>
      </div>
    </section>
  );
}

