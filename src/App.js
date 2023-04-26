import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was created by Kerry Murphy and is open source on{" "}
          <a
            href="https://github.com/Kerrigan1337/react-weather-app"
            target="_blank"
            without
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
