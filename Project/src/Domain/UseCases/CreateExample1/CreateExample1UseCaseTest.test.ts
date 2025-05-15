// deno-lint-ignore-file no-explicit-any no-unused-vars

import { expect } from "@deps";
import { createExample1Usecase } from "./index.ts";
import type { ICreateExample1RequestDTO } from "./CreateExample1DTO.ts";

const sut = createExample1Usecase;

const fakeCreateExample1DTO: ICreateExample1RequestDTO = {
  Nome: "fakeNomeUm",
  Sobrenome: "fakeSobrenomeUm",
  Email: "fakeemailUm@email.com",
}


Deno.test({
  name: "[ Main ] deve retornar a Entidade igual o fake passado com a propriedade ID.",
  only: false,
  async fn() {
    const expected = {
      ID: "todo: makeID() - chamar aqui",
      Props: fakeCreateExample1DTO,
    }
    const tested = await sut.execute(fakeCreateExample1DTO)
    console.log(tested)

    expect(await tested).toEqual(expected);
  },
});


export default 1;
