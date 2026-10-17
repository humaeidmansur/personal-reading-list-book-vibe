"use client";

import React, { useState } from "react";
import Image from "next/image";
import heroImage from "@/app/hero_img.jpg";

const Banner = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-10 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-100 via-white to-emerald-50 px-6 py-10 shadow-lg md:flex-row md:px-12 lg:py-14">
          <div className="max-w-xl space-y-6 text-center md:text-left">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              📚 Discover Your Next Read
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Books to <span className="text-emerald-600">freshen up</span>{" "}
              your bookshelf
            </h1>

            <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
              Explore inspiring stories, discover new authors, and find books
              that deserve a special place on your bookshelf.
            </p>

            <button
              onClick={() => setShowMessage(true)}
              className="btn btn-success rounded-full px-7 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View The List →
            </button>

            {showMessage && (
              <div
                role="alert"
                className="mt-4 rounded-xl border border-red-200 bg-red-50 p-5 text-left"
              >
                <h2 className="font-bold text-red-700">
                  Unable to Load Reading List
                </h2>

                <p className="mt-2 text-sm text-slate-700">
                  We couldn't load your reading list. Please try again or click Books navigation button
                  .
                </p>

                <button
                  onClick={() => setShowMessage(false)}
                  className="btn btn-outline btn-error mt-4"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>

          <div className="relative w-full max-w-md md:max-w-lg">
            <div className="absolute -inset-4 rounded-3xl bg-emerald-200/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={heroImage}
                alt="A collection of books"
                width={800}
                height={400}
                priority
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;