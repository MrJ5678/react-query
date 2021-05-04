import { useQuery } from "react-query"
import Planet from "./Planet"

const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/planets/")
  return res.json()
}
export default function People() {
  const { isLoading, data, isSuccess, isError } = useQuery(
    "planets",
    fetchPlanets
  )

  return (
    <div>
      <h2>Planets</h2>
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
