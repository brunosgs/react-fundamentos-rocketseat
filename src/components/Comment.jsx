import { ThumbsUpIcon, TrashIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
   const [likeCount, setLikeCount] = useState(0)

   function handleDeleteComment() {
      onDeleteComment(content)
   }

   /* 
      O que é Closure?
      - Em JS, uma closure é uma função que tem acesso ao escopo
      onde foi criada, mesmo após esse escopo ter sido encerrado.
      Ela "lembra" do ambiente em que foi criada.
      
      1 - Mecanismo do React: Quando você passa uma função para o setLikeCount, 
      o React garante que essa função receberá o valor MAIS RECENTE do estado como 
      argumento (state no caso).
      2 - Fila de atualizações: O React mantém uma fila interna de atualizações 
      de estado. Cada função na fila recebe o resultado da anterior.  
   */
   function handleLikeComment() {
      setLikeCount((state) => {
         return state + 1
      });
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