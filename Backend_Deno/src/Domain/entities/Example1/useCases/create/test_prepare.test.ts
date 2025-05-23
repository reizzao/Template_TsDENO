// deno-lint-ignore-file no-explicit-any no-unused-vars

import { expect } from "@deps";
import { CreateExample1UseCaseFactory, Example1RepositoriesOptionsInuse, fakeCreateExample1DTO, seedCreateExample101, IExample1Repository, Example1, ISeddCreateExample1 } from "@example1";

const repoInuse: IExample1Repository = new Example1RepositoriesOptionsInuse().memory()
const sut = await new CreateExample1UseCaseFactory().execute(repoInuse);
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
