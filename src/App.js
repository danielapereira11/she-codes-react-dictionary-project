import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            <a
              href="https://github.com/danielapereira11/she-codes-react-dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>{" "}
            by Daniela Pereira | Hosted on Netlify
          </small>
        </footer>
      </div>
    </div>
  );
}
