// deno-lint-ignore-file no-explicit-any no-unused-vars

import { expect } from "@deps";
import { createExample1UseCaseFactory, example1RepositoriesOptions, CreateExample1UseCase, fakeCreateExample1DTO, seedCreateExample101, IExample1Repository, Example1, ISeddCreateExample1 } from "@example1";

const repoInuse: IExample1Repository = example1RepositoriesOptions.memory
const sut: CreateExample1UseCase = createExample1UseCaseFactory(repoInuse);
const seed: ISeddCreateExample1 = seedCreateExample101

function cleanRepo() {
  repoInuse.collection = []
}


Deno.test({
  name: "[ Example1 ] deve retornar a Entidade igual o salvo em repo memory.",
  only: false,
  async fn() {

    cleanRepo()

    const expected: ISeddCreateExample1 = await seed

    const tested: Example1 = await sut.execute(fakeCreateExample1DTO)
    console.log(tested)

    expect(await tested).toEqual(expected);
    expect(await tested).toHaveProperty("ID");
    expect(await tested.Request).toHaveProperty("Nome");
    expect(await tested.Request).toHaveProperty("Email");
    expect(await tested.Request.Email).toBe(expected.Request.Email);
  },
});

export default 1
