import styles from  './Layout.module.css';
import { PropsWithChildren } from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function Layout ({ children }: PropsWithChildren): JSX.Element {
  return (
    <section className={styles.layout}>
      <Navbar />
      { children }
      <Footer />
    </section>
  )
}