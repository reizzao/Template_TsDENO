// deno-lint-ignore-file no-explicit-any no-unused-vars

import { expect } from "@deps";
import { Main } from "./main.ts";

const sut = Main;


Deno.test({
  name: "[ Main ] deve retornar o valor do Sut Main.",
  only: false,
  fn() {
    const tested = sut()
    const expected = "rodando o Main 1"
    console.log(`{Tester} dentro do test o interpolado é >> ${sut()}.`)
    expect(tested).toBe(expected);
  },
});


export default 1;
