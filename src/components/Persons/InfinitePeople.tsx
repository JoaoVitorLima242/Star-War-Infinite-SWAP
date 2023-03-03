import InfiniteScroll from "react-infinite-scroller";
import { Person, TPerson } from "./Person";
import { useInfiniteQuery } from "react-query";
import { fetchUrl } from "../../api";
import { TPage } from "../../@types/pages";

const initialUrl = "https://swapi.dev/api/people/";

export function InfinitePeople() {
  
  const {data, fetchNextPage, hasNextPage, isLoading, isIdle, isError, error, isFetching} = useInfiniteQuery<TPage<TPerson>, Error>(
    'people', 
    ({pageParam = initialUrl}) => fetchUrl(pageParam), 
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined
    }
  )

  if (isLoading || isIdle) return <div className="loading">Loading...</div>
  if (isError) return <div>Error: {error.toString()}</div>
  
  return (
    <InfiniteScroll loadMore={() => fetchNextPage()} hasMore={hasNextPage}>
      {isFetching && <div className="loading">Loading...</div>}
      {data.pages.map((pageData) => {
        return pageData.results.map(({name, hairColor, eyeColor}) => {
          return(
          <Person 
            name={name}
            eyeColor={eyeColor}
            hairColor={hairColor}
          />
        )})
      })}
    </InfiniteScroll>
  );
}
