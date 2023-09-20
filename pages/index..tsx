import Image from "next/image";
import Link from "next/link";

// export const getServerSideProps = async () => {
//  It works on the server, but it makes the request every time the user
//  loads the page.
//   const resp = await fetch(`${process.env.DOMAIN}/api/avo`)
//   const data = await resp.json()
//   return {
//     props: {
//       productList: data.data
//     }
//   }
// }

// ESTATIC SITE GENERATION
export const getStaticProps = async () => { // PAGES ONLY
  // It works on the server, but when you make a build it downloads all the data
  // and generates a static page. That's why we use getStaticProps.
  const resp = await fetch(`${process.env.DOMAIN}/api/avo`)
  const data = await resp.json()
  return {
    props: {
      productList: data.data
    }
  }
}

export default function Home({productList = []}: { productList: TProduct[]}) {
  return (
    <>
      <h1>Home Page</h1>
      <section>
        {
          productList.map(product => (
            <div className='product' key={product.id}>
              <Link href={`/product/${product.id}`} prefetch={false} style={{
                textDecoration: 'none',
                color: 'black'
              }}>
                <Image src={product.image} alt={product.name} priority width={200} height={150}/>
                <h5>{product.name}</h5>
                <p>{product.attributes.description}</p>
              </Link>
            </div>
          ))
        }
      </section>
      <style jsx>
        {`
          section {
            padding: 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 0.5rem;
          }
          .product {
            border: 1px solid #ccc;
            border-radius: 0.3rem;
          }

          .product:hover {
            background-color: #ccc;
          }
        `}
      </style>
    </>
  );
}
