import { useState } from "react";
import "./App.css";
import HeaderNavBar from "./HeaderNavBar.jsx";

function App() {
  return (
    <>
      <head>
        <title>E-Commerce Website</title>
      </head>
      <header>
        <HeaderNavBar />
      </header>
      <main>
        <div class="container">
          <section class="featured-products"></section>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
