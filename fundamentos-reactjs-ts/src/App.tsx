import "./global.css";

import styles from './App.module.css';
import { Header } from "./components/Header";
import { Post, type PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts: PostType[] = [
   {
      id: 1,
      author: {
         avatarUrl: 'https://github.com/brunosgs.png',
         name: 'Bruno',
         role: 'Developer'
      },
      content: [
         {
            type: 'paragraph',
            content: 'Fala galeraa 👋'
         },
         {
            type: 'paragraph',
            content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
         },
         {
            type: 'link',
            content: 'bruno.g/doctorcare'
         }
      ],
      publishedAt: new Date('2025-05-07 22:28:00')
   },
   {
      id: 2,
      author: {
         avatarUrl: 'https://github.com/diego3g.png',
         name: 'Diego',
         role: 'CTO'
      },
      content: [
         {
            type: 'paragraph',
            content: 'Fala galeraa 👋'
         },
         {
            type: 'paragraph',
            content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
         },
         {
            type: 'link',
            content: 'diego3g/doctorcare'
         }
      ],
      publishedAt: new Date('2025-05-15 12:56:47')
   }
]

export function App() {
   return (
      <div>
         <Header />
         <div className={styles.wrapper}>
            <Sidebar />
            <main>
               {posts.map(post => {
                  return (
                     <Post
                        key={post.id}
                        post={post}
                     />
                  )
               })}
            </main>
         </div>
      </div>
   )
}