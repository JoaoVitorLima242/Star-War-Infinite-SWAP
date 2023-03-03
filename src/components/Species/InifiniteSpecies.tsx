import InfiniteScroll from "react-infinite-scroller";
import { Species, TSpecies } from "./Species";
import { TPage } from "../../@types/pages";
import { useInfiniteQuery } from "react-query";
import { fetchUrl } from "../../api";

const initialUrl = "https://swapi.dev/api/species/";

export function InfiniteSpecies() {
  const {data, fetchNextPage, hasNextPage, isLoading, isIdle, isError, error, isFetching} = useInfiniteQuery<TPage<TSpecies>, Error>(
    'people', 
    ({pageParam = initialUrl}) => fetchUrl(pageParam), 
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined
    }
  )

  if (isLoading || isIdle) return <div className="loading">Loading...</div>
  if (isError) return <div>Error: {error.toString()}</div>

  return <InfiniteScroll loadMore={() => fetchNextPage()} hasMore={hasNextPage}>
  {isFetching && <div className="loading">Loading...</div>}
  {data.pages.map((pageData) => {
    return pageData.results.map(({name, average_lifespan, language}) => {
      return(
      <Species 
        name={name}
        average_lifespan={average_lifespan}
        language={language}
      />
    )})
  })}
</InfiniteScroll>;
}
