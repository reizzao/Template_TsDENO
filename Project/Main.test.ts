// deno-lint-ignore-file no-explicit-any no-unused-vars

// import { expect } from "@serverTest";
import { expect } from "@dep_deno";

import { App } from "./Main.ts";

const sut = App;

const dubleConsoleObject: any = { nome: "rei", numero: 10.05 }
// const inputSut2 = "bar";

// const obj1000: any = { nome: "rei", numero: 10.05 }
// const obj10001: any = () => "sou o resultado da funcao1 "
// Lib_RzTS.Console(obj1000)
// Lib_RzTS.Console(obj10001())
// Lib_RzTS.Console("Hellow 1234 ")

Deno.test({
  name: "[ Console ] deve retornar os valores do Objeto no console",
  only: false,
  fn() {
    expect(sut.Example).toEqual(undefined);
  },
});

/* TESTER_CONSOLE ************************************* */

function tester_() {
  sut.Example
}
tester_();

export default 1;
