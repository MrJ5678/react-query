import { useState } from "react"
import { useQuery } from "react-query"
import Planet from "./Planet"

const fetchPlanets = async page => {
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`)
  return res.json()
}
export default function People() {
  const [page, setPage] = useState(1)
  const { isLoading, data, isSuccess, isError } = useQuery(
    ["planets", page],
    () => fetchPlanets(page),
    { keepPreviousData: true }
  )

  return (
    <div>
      <h2>Planets</h2>
      <button
        onClick={() => setPage(old => Math.max(old - 1, 1))}
        disabled={page === 1}
      >
        previous page
      </button>
      <span>current page: {page}</span>
      <button
        onClick={() => {
          if (data && data.next) {
            setPage(old => old + 1)
          }
        }}
        disabled={data && !data.next}
      >
        next page
      </button>
      {isLoading && <div>正在加载...</div>}
      {isError && <div>请求错误</div>}
      {isSuccess &&
        data.results.map(planet => (
          <Planet key={planet.name} planet={planet} />
        ))}
    </div>
  )
  // if (isLoading) {
  //   return <div>正在加载中...</div>
  // }
  // if (isError) {
  //   return <div>请求错误</div>
  // }
  // if (isSuccess) {
  //   return (
  //     <div>
  //       <p>planets</p>
  //     </div>
  //   )
  // }

  // return (
  //   <div>
  //     {isLoading ? (
  //       <div>正在加载中..</div>
  //     ) : isError ? (
  //       <div>请求错误</div>
  //     ) : (
  //       <div>
  //         <p>planets</p>
  //       </div>
  //     )}
  //   </div>
  // )
}
