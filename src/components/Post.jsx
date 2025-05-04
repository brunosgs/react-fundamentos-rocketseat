import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
   return (
      <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <Avatar src="https://github.com/brunosgs.png" />
               <div className={styles.authorInfo}>
                  <strong>Bruno</strong>
                  <span>Wev Developer</span>
               </div>
            </div>
            <time title="03 de Maio às 16:02h" datetime="2025-05-03 16:02:36">Publicado há 1h</time>
         </header>
         <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>
               👉{' '}<a href="">bruno.g/doctorcare</a>
            </p>
            <p>
               <a href="">#novoprojeto {' '}</a>
               <a href="">#nlw {' '}</a>
               <a href="">#rocketseat {' '}</a>
            </p>
         </div>
         <form className={styles.commentPost}>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder='Deixe um comentário' />
            <footer>
               <button type="submit">Publicar</button>
            </footer>
         </form>
         <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
         </div>
      </article>
   )
}