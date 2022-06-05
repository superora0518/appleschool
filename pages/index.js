import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { client } from '../lib/sanity'

export default function Home({ tours }) {
  console.log(tours)
  return (
    <div className={styles.grid}>
      {tours.map((tour) => {
        return (
          <a key={tour._id} href="#" className={styles.card}>
            <h3>{tour.title}</h3>
            <p>{tour.phone}</p>
          </a>
        )
      })}
    </div>
  )
}

export async function getStaticProps() {
  const tours = await client.fetch(`*[_type == "tours"]`);
  return {
    props: {
      tours
    }
  }
}
