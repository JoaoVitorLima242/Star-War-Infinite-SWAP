import InfiniteScroll from "react-infinite-scroller";
import { Person } from "./Person";
import { useInfiniteQuery } from "react-query";
import { fetchUrl } from "../../api";

const initialUrl = "https://swapi.dev/api/people/";

export function InfinitePeople() {
  
  const {data, fetchNextPage, hasNextPage} = useInfiniteQuery(
    'people', 
    ({pageParam = initialUrl}) => fetchUrl(pageParam), {
      getNextPageParam: (lastPage: unknown) => lastPage?.next
    }
  )
  return <InfiniteScroll />;
}
