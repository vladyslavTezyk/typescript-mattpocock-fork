import { expectTypeOf, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
}

type Role = "admin" | "user" | "super-admin"

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "super-admin",
};

it("Should be exactly the union of 'admin' | 'user' | 'super-admin' ", () => {
  expectTypeOf<Role>().toEqualTypeOf<"admin" | "user" | "super-admin">()
  expectTypeOf<"guest">().not.toEqualTypeOf<Role>()
})

it("Role should be union of admin, user or super-admin", () => {
  expectTypeOf(defaultUser.role).toEqualTypeOf<Role>()
})