export interface Book {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  category: string;
  review: string;
  tags: string[];
  totalPages: number;
  publisher: string;
  yearOfPublishing: number;
  rating: number;
  description?: string; 
}
