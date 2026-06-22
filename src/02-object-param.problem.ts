import { expect, it } from "vitest";

/* No matter whether using type or interface. The most important is to stay consistent over the project. 
For me it's better to use type annotation as I can type everything I want with it. 
*/
type SumOfTwoArgs = {
  first: number,
  second: number
}

// interface SumOfTwoArgs {
//   first: number, 
//   second: number
// }

export const addTwoNumbers = (params: SumOfTwoArgs) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
