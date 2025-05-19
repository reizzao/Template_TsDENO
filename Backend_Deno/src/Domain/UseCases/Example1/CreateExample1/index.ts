import { RepositoriesOptions } from "../../../../Global/types.entities.generics.ts";
import { IExample1Repository } from "../../../Repositories/Example1/IExample1Repository.ts";
import { MemoryExample1Repository } from "../../../Repositories/Example1/Implementations/MemoryExample1Repository.ts";
import { CreateExample1UseCase } from "./prepare.ts";

const example1RepositoriesOptions: RepositoriesOptions<IExample1Repository> = {
  json: new MemoryExample1Repository(), // todo: temporario
  memory: new MemoryExample1Repository(),
}

const createExample1UseCaseFactory = (repo: IExample1Repository) => {
  return new CreateExample1UseCase(repo)
}

export { createExample1UseCaseFactory, example1RepositoriesOptions }
