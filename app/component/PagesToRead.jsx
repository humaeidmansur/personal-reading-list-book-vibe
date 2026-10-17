"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#E63946",
  "#C77DFF",
  "#4361EE",
  "#2A9D8F",
  "#F72585",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height} C${x + width / 3},${y + height} ${
    x + width / 2
  },${y + height / 3} ${x + width / 2},${y} C${
    x + width / 2
  },${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  },${y + height} Z`;
};

function TriangleBar({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  index = 0,
}) {
  const color = colors[index % colors.length];

  return (
    <path
      d={getPath(x, y, width, height)}
      fill={color}
    />
  );
}

export default function PagesToRead() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch("/booksData.json");

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await response.json();
        setBooks(data);
      } catch {
        setError("Unable to load book data. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <span className="loading loading-bars loading-xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
        <p role="alert" className="text-red-500">
          {error}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p>No books available to display.</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Book Pages Overview
        </h2>
        <p className="mt-2 text-slate-500">
          Compare the total number of pages in each book.
        </p>
      </div>

      <div className="mx-auto h-[450px] w-full max-w-5xl">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={books}
            margin={{
              top: 30,
              right: 20,
              left: 10,
              bottom: 70,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="bookName"
              angle={-35}
              textAnchor="end"
              interval={0}
              height={100}
              tick={{ fontSize: 11 }}
            />

            <YAxis
              type="number"
              label={{
                value: "Total Pages",
                angle: -90,
                position: "insideLeft",
              }}
            />

            <Tooltip
              formatter={(value) => [`${value} pages`, "Total Pages"]}
              labelFormatter={(label) => `Book: ${label}`}
            />

            <Bar
              dataKey="totalPages"
              name="Total Pages"
              shape={<TriangleBar />}
            >
              <LabelList
                dataKey="totalPages"
                position="top"
                fill="#334155"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}