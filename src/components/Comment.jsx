import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content }) {
   return (
      <div className={styles.comment}>
         <Avatar
            src="https://github.com/brunosgs.png"
            hasBorder={false}
         />
         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Bruno</strong>
                     <time title="03 de Maio às 16:02h" dateTime="2025-05-03 16:02:36">Cerca de 23h atrás</time>
                  </div>
                  <button title="Deletar comentário">
                     <Trash size={24} />
                  </button>
               </header>
               <p>{content}</p>
            </div>
            <footer>
               <button>
                  <ThumbsUp size={20} />
                  Aplaudir <span>20</span>
               </button>
            </footer>
         </div>
      </div>
   );
}