import "./App.css";
import responseMovies from "./mocks/with-results.json";
import withoutResults from "./mocks/no-results.json";

const App = () => {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  return (
    <div>
      <header>
        <form className="form">
          <input type="text" placeholder="Avengers, StarWars, The Matrix..." />
          <button>Buscar</button>
        </form>
      </header>
      <main></main>
    </div>
  );
};

export default App;
