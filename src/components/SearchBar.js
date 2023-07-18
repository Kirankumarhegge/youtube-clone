import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { addToCache } from "../utils/CacheSlice";
import ResultsSuggestionContainer from "./ResultsSuggestionContainer";
import { showSuggestionsContainer } from "../utils/showSearchSuggestionsSlice";
import { Link } from "react-router-dom";
import { FaMicrophone, FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState();
  const dispatch = useDispatch();
  const cache = useSelector((store) => store.searchSuggestionCache.cache);
  const showSuggestions = useSelector(
    (store) => store.showSearchSuggestions.show
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSearchSuggestions(searchQuery);
    }, 200);

    // eslint-disable-next-line
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const fetchSearchSuggestions = async (searchQuery) => {
    if (cache[searchQuery]) {
      setSuggestions(cache[searchQuery]);
    } else {
      const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
      const jsonData = await data.json();
      // console.log(jsonData)
      setSuggestions(jsonData[1]);

      //add to cache
      const obj = {};
      obj[searchQuery] = jsonData[1];
      dispatch(
        addToCache({
          [searchQuery]: jsonData[1],
        })
      );
    }
  };

  if (searchQuery !== "" && !suggestions) return null;

  // console.log(suggestions);

  if (!suggestions) return null;

  return (
    <div className="lg:col-span-4 md:col-start-3 md:col-span-2 justify-center justify-between items-center">
      <div className="">
      <form
        className="font-medium mx-2 p-1"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex h-10 mt-2 pt-[2px] pr-5 ">
          <input
            type="text"
            placeholder="Search"
            className="w-[550px] placeholder-zinc-500 font-normal border border-zinc-700 outline-none focus:border-sky-600 rounded-s-full px-5 shadow-lg dark:bg-neutral-950"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => dispatch(showSuggestionsContainer(true))}
          />

          <Link to={`/search?query=${searchQuery}`}>
            <div className="h-[38px] py-2 px-5 border border-zinc-700 rounded-e-full hover:bg-zinc-700 shadow-lg bg-gray-100 dark:bg-zinc-800">
            <FaSearch className="mt-[9%]"/>
            </div>
          </Link>
          <div className="px-2">
          <div className="bg-neutral-700 w-9 h-9 pt-3 rounded-full">
            <FaMicrophone className="m-[-5%] mb-[5%] ml-[28%]"/>
          </div>
          </div>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute bg-neutral-900  w-[550px] border-neutral-900 rounded-lg shadow-lg  font-semibold mx-1 my-[2px]">
            {" "}
            {suggestions.map((suggestion) => {
              return (
                <ResultsSuggestionContainer
                  suggestion={suggestion}
                  key={suggestion}
                />
              );
            })}
          </div>
        )}
      </form>
      </div>
  </div>
  );
};

export default SearchBar;
