const getStorageKey = (type) =>
  type === "read" ? "readBooks" : "wishlistBooks";

export function getSavedBooks(type) {
  if (typeof window === "undefined") {
    return [];
  }

  const saved = localStorage.getItem(getStorageKey(type));

  if (!saved) {
    return [];
  }

  const books = JSON.parse(saved);

  if (!Array.isArray(books)) {
    throw new Error("Invalid reading list data.");
  }

  return books;
}

export function saveBook(book, type) {
  const books = getSavedBooks(type);

  if (books.some((item) => item.bookId === book.bookId)) {
    return false;
  }

  localStorage.setItem(
    getStorageKey(type),
    JSON.stringify([...books, book])
  );

  return true;
}

export function removeAllBooks(type) {
  localStorage.removeItem(getStorageKey(type));
}