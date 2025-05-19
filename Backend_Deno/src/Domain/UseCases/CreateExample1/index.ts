import { RepositoriesOptions } from "../../../Global/types.entities.generics.ts";
import { IExample1Repository } from "../../Repositories/IExample1Repository.ts";
import { MemoryExample1Repository } from "../../Repositories/Implementations/MemoryExample1Repository.ts";
import { CreateExample1UseCase } from "./CreateExample1UseCases.ts";

const example1RepositoriesOptions: RepositoriesOptions<IExample1Repository> = {
  json: new MemoryExample1Repository(), // todo: temporario
  memory: new MemoryExample1Repository(),
}

const createExample1UseCaseFactory = (repo: IExample1Repository) => {
  return new CreateExample1UseCase(repo)
}

export { createExample1UseCaseFactory, example1RepositoriesOptions }
