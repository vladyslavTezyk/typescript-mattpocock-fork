import { expectTypeOf, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Post[];
}

interface Post {
  id: number;
  title: string;
}

const posts = [
    {
      id: 1,
      title: "How I eat so much cheese",
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ]

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
  posts
};

it("posts should be a correctly typed array of Post", () => {
  expectTypeOf(defaultUser.posts).toEqualTypeOf<Array<Post>>()
  expectTypeOf(defaultUser.posts[0]).toEqualTypeOf<Post>()
})