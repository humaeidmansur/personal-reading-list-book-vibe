import Image from "next/image";
import Link from "next/link";
import { Book } from "../shared/Type";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <article className="group h-full overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Book Cover */}
      <Link href={`/books/${book.bookId}`} className="block">
        <div className="flex h-64 items-center justify-center rounded-lg bg-slate-50">
          <div className="relative h-52 w-36 overflow-hidden rounded-sm border-4 border-white bg-white shadow-md transition-transform duration-300 group-hover:scale-105">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>
        </div>
      </Link>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-3">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium text-emerald-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Title */}
      <h3 className="mt-3 line-clamp-1 text-lg font-bold text-slate-800">
        {book.bookName}
      </h3>

      {/* Author */}
      <p className="mt-1 text-sm text-slate-500">
        By: <span className="font-medium">{book.author}</span>
      </p>

      {/* Category and Rating */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-sm font-medium text-slate-600">
          {book.category}
        </span>

        <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
          <span>{book.rating.toFixed(1)}</span>
          <span className="text-lg text-amber-400">★</span>
        </div>
      </div>

      {/* View Details */}
      <Link
        href={`/books/${book.bookId}`}
        className="mt-4 inline-block rounded-lg bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-700"
      >
        View Details
      </Link>
    </article>
  );
};

export default BookCard;