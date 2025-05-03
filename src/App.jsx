import "./global.css";

import styles from './App.module.css';
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
   return (
      <div>
         <Header />
         <div className={styles.wrapper}>
            <Sidebar />
            <main>
               <Post
                  author="Bruno"
                  content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam commodi quod dicta eligendi deserunt quibusdam perferendis fugiat ad quaerat dignissimos, atque vel? Ipsam laborum accusantium, consectetur totam laudantium sapiente quo!"
               />
               <Post
                  author="Bruno"
                  content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam commodi quod dicta eligendi deserunt quibusdam perferendis fugiat ad quaerat dignissimos, atque vel? Ipsam laborum accusantium, consectetur totam laudantium sapiente quo!"
               />
            </main>
         </div>
      </div>
   )
}