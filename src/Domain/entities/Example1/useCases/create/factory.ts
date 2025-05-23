import { IExample1Repository, PrepareCreateExample1UseCase } from "@example1";

export class CreateExample1UseCaseFactory {

  async execute(repo: IExample1Repository) {
    return await new PrepareCreateExample1UseCase(repo)
  }

}
