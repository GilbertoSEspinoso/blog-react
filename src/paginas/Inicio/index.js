import styles from "paginas/inicio/Inicio.module.css";

import Post from "componentes/post";
import posts from "json/posts.json";

export default function Inicio() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  )
}