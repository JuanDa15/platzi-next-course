import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'

export const getStaticPaths: GetStaticPaths = async (): Promise<{ paths: { params: { id: string } }[], fallback: boolean }> => {
  const products = await fetch(`${process.env.DOMAIN}/api/avo`)
  const { data: productList }: TAPIAvoResponse = await products.json()
  const paths = productList.map(({id}) => ({
    params: {
      id
    }
  }))
  return {
    paths: paths,
    // incremental static generation 
    // 404 for everithing else
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}): Promise<{ props: { product: TProduct } }> => {
  const id = params.id as string
  
  try {
    const response = await fetch(`${process.env.DOMAIN}/api/avo/${id}`)
    const product: TProduct = await response.json()
    return {
      props: {
        product
      }
    }
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export default function Product({ product }: { product: TProduct }){
  return (
    <>
      {
        product && (
        <section>
          <h1>{product.name}</h1>
          <Image src={product.image} width={300} height={400} alt={product.name} priority />
          <p>
            {product.attributes.description}
          </p>
          <div>
            <p>Price: <b>$ {product.price}</b></p>
            <p>SKU: <b>{product.sku}</b></p>
          </div>
        </section>
        )
      }
    </>
  )
}