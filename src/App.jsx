import { Post } from "./Post";

export function App() {
  return (
    <div>
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