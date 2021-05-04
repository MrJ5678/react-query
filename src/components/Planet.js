export default function Planet({ planet }) {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  )
}
