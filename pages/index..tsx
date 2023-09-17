import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [data, setData] = useState<TProduct[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await window.fetch('/api/avo')
        const data = await resp.json()
        setData(data.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [])

  return (
    <>
      <h1>Home Page</h1>
      {
        data.map(product => (
          <div key={product.id}>
            {product.name}
          </div>
        ))
      }
    </>
  );
}
