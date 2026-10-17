# 📚 Personal Reading List — Book Vibe

A responsive personal reading list application built with Next.js, React, TypeScript, and Tailwind CSS. The application allows users to explore books, view book details, and manage their personal reading list.

This project was developed as part of the **DevConnect Internship — Brief C: Personal Reading List**.

## ✨ Features

* **Browse Books:** Explore available books and their information.
* **Book Details:** View additional information about individual books.
* **Personal Reading List:** Add books to your reading list and remove them when needed.
* **Empty State:** Guide new users on how to get started when their reading list is empty.
* **Loading State:** Display a clear loading message while book data is being retrieved.
* **Error State:** Explain when loading data fails and provide a clear next step.
* **Responsive Design:** Support desktop, tablet, and mobile screen sizes.
* **Accessible Interface:** Use semantic HTML, keyboard-accessible controls, and visible focus indicators.

## 🛠️ Technologies Used

* Next.js
* React
* TypeScript / JavaScript
* Tailwind CSS
* DaisyUI
* REST API / data fetching
* Git and GitHub

## 🚀 Getting Started

### Prerequisites

Install the following before running the project:

* Node.js
* npm
* Git

### 1. Clone the repository

```bash
git clone https://github.com/humaeidmansur/personal-reading-list-book-vibe.git
```

### 2. Open the project folder

```bash
cd personal-reading-list-book-vibe
```

If your Next.js application is inside a nested folder, navigate into that folder before running the remaining commands.

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit:

http://localhost:3000

The application should now be available in your browser.

## 📖 How to Use the Application

1. Open the application and browse the available books.
2. Select a book to view its details.
3. Add a book to your personal reading list.
4. Open your reading list to view saved books.
5. Remove a book when you no longer want it in your list.

A new user should start with an empty reading list and receive clear guidance on how to add the first book.

## 🧪 Testing Loading, Error, and Empty States

The following states must be visually and textually distinct and demonstrable by a reviewer without modifying the source code.

### 1. Loading State

**Purpose:** Inform users that the application is retrieving data.

**Expected behaviour:**

* Display a loading indicator or message while the request is in progress.
* Make it clear that the content is loading.
* Avoid presenting the loading state as an empty result or an error.

**How to test:** Use the application's built-in state demonstration control or documented test route to display the loading state.

### 2. Error State

**Purpose:** Help users understand when data cannot be loaded.

**Expected behaviour:**

* Display a clear error message.
* Explain what failed, such as loading the available books.
* Tell users what they can do next.
* Provide a Retry action when supported.

**How to test:** Use the application's built-in state demonstration control or documented test route to display the error state.

### 3. Empty State

**Purpose:** Help new users understand the personal reading list when no books have been saved.

**Expected behaviour:**

* Display a clear message explaining that the reading list is empty.
* Explain what the user can do with the feature.
* Provide an action that helps the user add their first book, such as **Browse Books**.
* Avoid displaying the empty state as an error.

**How to test:**

1. Open the personal reading list.
2. Ensure that no books have been saved.
3. Confirm that the empty-state message and first action are visible.

**Reviewer note:** Document the exact state-demo controls or routes implemented in the application before submission. Reviewers should be able to demonstrate all three states without changing the code.

## ♿ Accessibility

The application aims to provide an accessible experience for keyboard and mobile users.

* Interactive elements should be operable using a keyboard.
* Focus indicators should be clearly visible.
* Buttons should have meaningful labels.
* Loading, error, and empty messages should be understandable.
* The layout should remain usable on narrow screens, including a viewport width of 320px.
* Content should not cause unintended horizontal scrolling on small screens.

## 📱 Responsive Design

The interface is designed to adapt to different screen sizes.

* **Desktop:** Use the available space to display book information clearly.
* **Tablet:** Adjust the layout and spacing to fit the screen.
* **Mobile:** Stack content where necessary and keep interactive controls accessible.

## 📂 Project Structure

The project uses the Next.js application structure. The main areas include:

* `app/` — Application routes and pages.
* `app/components/` — Reusable interface components, if organized in this folder.
* `public/` — Static assets and public data files.
* `package.json` — Project dependencies and available scripts.

The exact folder structure may vary depending on the current implementation.

## 🎯 Project Goals

This project demonstrates the ability to:

* Build a responsive web application using Next.js and React.
* Fetch and display data.
* Manage a personal reading list with add and remove functionality.
* Design distinct loading, error, and empty states.
* Improve usability through accessible controls and clear feedback.
* Document setup, usage, and testing instructions for reviewers.

## 👨‍💻 Author

**Humaeid Bin Mansur**

GitHub: https://github.com/humaeidmansur

---

**DevConnect Internship Project — Brief C: Personal Reading List**
