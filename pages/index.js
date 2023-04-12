import { Seo } from "../components";
import { Calltoaction, Hero, Upload } from "../components/sections";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Seo />

      <main
        className={
          "flex flex-col gap-6 items-center justify-center p-12 max-w-screen-2xl mx-auto"
        }
      >
        <Hero />
        <Upload />
        <Calltoaction />
      </main>
    </div>
  );
}
