import Banner from "componentes/banner";
import styles from "paginas/inicio/Inicio.module.css";

import posts from "json/posts.json";
import Post from "componentes/post";

export default function Inicio() {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  )
}