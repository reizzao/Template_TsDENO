// deno-lint-ignore-file no-explicit-any no-unused-vars

import { expect } from "@deps";
import { createExample1UseCaseFactory, example1RepositoriesOptions, IExample1, CreateExample1UseCase, ICreateExample1RequestDTO } from "@example1";

const repoInuse = example1RepositoriesOptions.memory
const sut: CreateExample1UseCase = createExample1UseCaseFactory(repoInuse);

function cleanRepo() {
  repoInuse.collection = []
}

const fakeCreateExample1DTO: ICreateExample1RequestDTO = {
  Nome: "fakeNomeUm",
  Sobrenome: "fakeSobrenomeUm",
  Email: "fakeemailUm@email.com",
}

const seedCreateExample101Tested: IExample1 = await sut.execute(fakeCreateExample1DTO)

Deno.test({
  name: "[ Main ] deve retornar a Entidade igual o fake passado com a propriedade ID.",
  only: false,
  async fn() {

    cleanRepo()

    const expected = {
      ID: "todo: makeID() - chamar aqui",
      Props: fakeCreateExample1DTO,
    }

    const tested = await sut.execute(fakeCreateExample1DTO)
    console.log(tested)

    expect(await tested).toEqual(expected);
  },
});


export { seedCreateExample101Tested }