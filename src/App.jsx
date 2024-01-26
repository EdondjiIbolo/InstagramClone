import "./App.css";
import { Feed } from "./Components/Feed";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";

function App() {
  return (
    <main className="container">
      <Header />
      <Feed />
      <Footer />
    </main>
  );
}

export default App;
