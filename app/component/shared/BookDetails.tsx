import Image from "next/image";

const BookDetails = () => {
  return (
    <section className="min-h-screen bg-white py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

          {/* ================= LEFT SIDE ================= */}
          <div className="flex justify-center">
            <div className="flex h-[520px] w-full max-w-[430px] items-center justify-center rounded-xl bg-slate-50 p-8 shadow-sm">
              <Image
                src="/book-cover.jpg"
                alt="Book cover"
                width={330}
                height={470}
                className="h-110 w-auto rounded-md object-cover shadow-xl transition duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-6">

            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                The Catcher in the Rye
              </h1>

              <p className="mt-2 text-lg text-slate-500">
                By: <span className="font-medium text-slate-700">
                  Awlad Hossain
                </span>
              </p>
            </div>

            {/* Category */}
            <div>
              <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                Fiction
              </span>
            </div>

            {/* Review */}
            <div>
              <p className="text-sm leading-7 text-slate-600">
                <span className="font-bold text-slate-900">
                  Review:
                </span>{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Interdum porta pulvinar non sit aliquam. Aenean pulvinar
                blandit vel non enim elementum penatibus pellentesque ac.
                Nec accumsan quisque nisi non nulla adipiscing lectus.
                Morbi elementum a auctor erat diam tellus.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-semibold text-slate-800">
                Tag:
              </span>

              <span className="rounded-full bg-green-50 px-4 py-1 text-sm font-medium text-green-600">
                #Young Adult
              </span>

              <span className="rounded-full bg-green-50 px-4 py-1 text-sm font-medium text-green-600">
                #Identity
              </span>
            </div>

            {/* Book Information */}
            <div className="space-y-4 border-t border-slate-200 pt-5">

              <div className="grid grid-cols-2">
                <p className="font-medium text-slate-500">
                  Number of Pages:
                </p>
                <p className="font-semibold text-slate-800">
                  281
                </p>
              </div>

              <div className="grid grid-cols-2">
                <p className="font-medium text-slate-500">
                  Publisher:
                </p>
                <p className="font-semibold text-slate-800">
                  J.B Lippincott & Co.
                </p>
              </div>

              <div className="grid grid-cols-2">
                <p className="font-medium text-slate-500">
                  Year of Publishing:
                </p>
                <p className="font-semibold text-slate-800">
                  1960
                </p>
              </div>

              <div className="grid grid-cols-2">
                <p className="font-medium text-slate-500">
                  Rating:
                </p>

                <p className="font-semibold text-slate-800">
                  ⭐ 4.8
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-3">
              <button
                className="rounded-lg border border-slate-300 px-7 py-3
                font-semibold text-slate-700 transition
                hover:border-slate-500 hover:bg-slate-50"
              >
                Read
              </button>

              <button
                className="rounded-lg bg-cyan-500 px-7 py-3
                font-semibold text-white transition
                hover:bg-cyan-600"
              >
                Wishlist
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;