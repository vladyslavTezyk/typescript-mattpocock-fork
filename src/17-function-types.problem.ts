import { boolean } from "zod";
import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange? => inline or in block by defining the type of arguments and function return type. 
 The syntax is function name: (arg: type) => return type 
 */
type FocusListener = (isFocused: boolean) => void

const addListener = (onFocusChange: (isFocused: boolean) => void) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
