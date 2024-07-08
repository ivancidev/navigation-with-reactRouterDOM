import { useParams } from "react-router-dom"

export default function Blog() {
  const { id } = useParams()
  return (
    <div>
      <h1>Blog {id}</h1>
    </div>
  )
}
