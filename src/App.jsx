import { Header } from "./components/header";
import { Post } from "./Post";
import "./global.css"

export function App() {
   return (
      <div>
         <Header />
         <Post
            author="Bruno"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam commodi quod dicta eligendi deserunt quibusdam perferendis fugiat ad quaerat dignissimos, atque vel? Ipsam laborum accusantium, consectetur totam laudantium sapiente quo!"
         />
         <Post
            author="Joãozinho"
            content="Um novo post feito por Joãozinho"
         />
      </div>
   )
}