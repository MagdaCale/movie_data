import './App.css';
import MovieArray from './components/MovieArray'
import DataComponent from './components/DataComponent'
import SortedMoviesButton from './components/SortedMoviesButton'
import { useState } from 'react'


const App = () => {
  const [movies, setMovies] = useState(MovieArray)
  const [isReverseSort, setIsReverseSort] = useState(false)

    const sortTitle = () => {
      const newSortedMovies = [...movies]
      newSortedMovies.sort((a, b) => {
      if (a.title < b.title) {
          return -1
      } else if (a.title > b.title) {
          return 1
      } else {
          return 0
      }
    })
    setMovies(newSortedMovies)
    setIsReverseSort(false)
  }

  const sortTitleReserve = () => {
    const newSortedMovies = [...movies]
    newSortedMovies.sort((a, b) => {
      if (a.title > b.title) {
          return -1
      } else if (a.title < b.title) {
          return 1
      } else {
          return 0
      }
    })
    setMovies(newSortedMovies)
    setIsReverseSort(true)
  }


  return (
    <>

    <SortedMoviesButton sortTitle={sortTitle} sortTitleReserve={sortTitleReserve}/>

    <div className="App">
        {movies.map((elt, i) => // elt ist eine Variable, (in diesem Beispiel) um jedes Element im Array movies darzustellen, während es durch die map-Methode iteriert wird.
          <DataComponent 
            key={i}
            title={elt.title}
            year={elt.year}
            director={elt.director}
            duration={elt.duration}
            genre={elt.genre}
            rate={elt.rate}
          />
          // Wir verwenden dann die Eigenschaften jedes Elements (z. B. title, year, director, etc.), um die entsprechenden Daten an die Data-Komponente weiterzugeben, die dann gerendert wird.
        )}
      </div>
    </>
  )
}

export default App;
