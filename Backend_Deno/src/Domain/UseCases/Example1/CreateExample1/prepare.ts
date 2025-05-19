import type { ICreateUseCase } from '../../../../Global/types.entities.generics.ts';
import { Example1 } from "../../../Model/Example1.ts";
import { IExample1Repository } from "../../../Repositories/Example1/IExample1Repository.ts";
import type { ICreateExample1RequestDTO } from "./dto.ts";

class CreateExample1UseCase implements ICreateUseCase<Example1, ICreateExample1RequestDTO>{
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