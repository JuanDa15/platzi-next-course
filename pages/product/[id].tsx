import { useRouter } from 'next/router'

export default function Product(){
  const {
    query: { id }
  } = useRouter()
  
  return (
    <div>
      Esta es la pagina de producto {id}
    </div>
  )
}