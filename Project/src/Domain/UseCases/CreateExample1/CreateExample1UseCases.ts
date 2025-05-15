import { Example1 } from "../../Model/Example1.ts";
import { IExample1Repository } from "../../Repositories/IExample1Repository.ts";
import type { ICreateExample1RequestDTO } from "./CreateExample1DTO.ts";

class CreateExample1UseCase {
  constructor(private readonly example1Repository: IExample1Repository) { }

  async execute(dto: ICreateExample1RequestDTO) {
    const example1AlreadyExists = await this.example1Repository.findByEmail(dto.Email)

    if (example1AlreadyExists) {
      throw new Error("Ops! Example1 já exite!")
    }

    const example1 = new Example1(dto)
    const saved = await this.example1Repository.save(example1)


    return await saved
  }
}

export { CreateExample1UseCase }