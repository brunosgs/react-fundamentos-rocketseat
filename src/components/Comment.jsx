import { ThumbsUpIcon, TrashIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
   const [likeCount, setLikeCount] = useState(0)

   function handleDeleteComment() {
      onDeleteComment(content)
   }

   function handleLikeComment() {
      setLikeCount(likeCount + 1)
   }

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
                  <button onClick={handleDeleteComment} title="Deletar comentário">
                     <TrashIcon size={24} />
                  </button>
               </header>
               <p>{content}</p>
            </div>
            <footer>
               <button onClick={handleLikeComment}>
                  <ThumbsUpIcon size={20} />
                  Aplaudir <span>{likeCount}</span>
               </button>
            </footer>
         </div>
      </div>
   );
}