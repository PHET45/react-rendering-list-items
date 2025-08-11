import "./App.css";
import './index.css'
import MovieList from "./components/MovieList";
function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <MovieList/>
      </section>
    </div>
  );
}

export default App;
