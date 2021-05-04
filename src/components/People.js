import { useQuery } from "react-query"
import Person from "./Person"

const fetchPeople = async () => {
  const res = await fetch("http://swapi.dev/api/people/")
  return res.json()
}
export default function People() {
  const { isLoading, data, isSuccess, isError } = useQuery(
    "people",
    fetchPeople
  )

  return (
    <div>
      <h2>People</h2>
      {isLoading && <div>正在加载...</div>}
      {isError && <div>请求错误</div>}
      {isSuccess &&
        data.results.map(person => (
          <Person key={person.name} person={person} />
        ))}
    </div>
  )
}
