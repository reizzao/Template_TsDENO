import { IExample1Repository, PrepareCreateExample1UseCase } from "@example1";

class CreateExample1UseCaseFactory {

  async execute(repo: IExample1Repository) {
    return await new PrepareCreateExample1UseCase(repo)
  }

}


// const createExample1UseCaseFactory = (repo: IExample1Repository) => {
//   return new CreateExample1UseCase(repo)
// }

export { CreateExample1UseCaseFactory }
