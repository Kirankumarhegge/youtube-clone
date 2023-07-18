import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ResultCard from "./ResultCard";
import { useDispatch } from "react-redux";
import { showSuggestionsContainer } from "../utils/showSearchSuggestionsSlice";
import { CardShimmer } from "./Shimmer";
import { capitalizeTheFirstLetterOfEachWord } from "../utils/constants";
import { FaFilter } from "react-icons/fa"

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const query = searchParams.get("query");
  // console.log("searched query: ", query)
  useEffect(() => {
    const SEARCH_RESULTS_URL =`https://youtube-v3-alternative.p.rapidapi.com/search?query=${query}&geo=US&lang=en`
    fetchSearchResults(SEARCH_RESULTS_URL);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [query]);

  const fetchSearchResults = async (SEARCH_RESULTS_URL) => {
    const data = await fetch(SEARCH_RESULTS_URL, {
      method: 'GET', // Replace with the appropriate HTTP method (GET, POST, etc.)
      param: {
        query: {query},
        geo: 'US',
        lang: 'en'
      },
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'adc29b9376msh1b0091298035bd7p168ba0jsn53e514376d50', // Replace with the actual value for x-auth-id
      },
    });
    const jsonData = await data.json();
    setSearchResults(jsonData.data);
    // console.log("serached items :: ",jsonData.data)
    dispatch(showSuggestionsContainer(false));
  };

  
  //early return
// return ( <CardShimmer />)
  if (!searchResults) return null;
  return searchResults.length === 0 ? (
    <CardShimmer />
  ) : (
    <>
      <div className="w-[90%] bg-neutral-950">
        <div className="flex items-center ml-[6%] mt-3">
            <FaFilter className="mr-3"/>
            <span className="font-normal">Filter</span>
        </div>
        <div className=" w-[100%] ml-14 mt-2 border-b border-gray-500"></div>
        <h1 className="p-5 ml-[4%] text-xl font-light text-xs">
          Here are the search results for:
          <span className="font-extrabold font-medium italic text-xs">
            {" "}
            {capitalizeTheFirstLetterOfEachWord(query)}
          </span>
          
        </h1>
        {searchResults.map((result) => (
          <ResultCard
            data={result}
          />
        ))}
      </div>
    </>
  );
};

export default SearchResults;
