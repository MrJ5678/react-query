export default function People({ setPage }) {
  return (
    <nav>
      <button onClick={() => setPage("planets")}>planets</button>
      <button onClick={() => setPage("People")}>People</button>
    </nav>
  )
}
