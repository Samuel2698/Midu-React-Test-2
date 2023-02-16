import "./App.css";
import responseResults from "./mocks/with-results.json";
import withoutResults from "./mocks/no-results.json";
import { Movies } from "./components/Movies";

const App = () => {
  const movies = responseResults.Search;

  return (
    <div className="page">
      <h1>Buscador de peliculas</h1>
      <header>
        <form className="form">
          <input type="text" placeholder="Avengers,Star Wars, The Matrix" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
};

export default App;
