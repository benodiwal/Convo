import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import User from "./components/User";

const Search = () => {
  const [params, setParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const query = params.get('query');

  useEffect(() => {
    if (query) {
    getResults();
    }

    return () => setResults([]);
  }, [query]);

  const getResults = async () => {
    const res = await fetch(`http://localhost:3001/search/results?name=${query}`);
    const query_results = await res.json();
    setResults(query_results);
  }

  return (
    <div className="overflow-hidden flex flex-col items-center gap-y-3 mt-5">
      {
        results && results.map((result) => (
          <User 
          key={result.username}
          username={result.username}/>
        ))
      }
    </div>
  )
}

export default Search