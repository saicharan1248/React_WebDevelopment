import "./App.css";
import HeaderNavBar from "./components/Header_Bar/HeaderNavBar";

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
        <div className="container">
          <section className="featured-products"></section>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
