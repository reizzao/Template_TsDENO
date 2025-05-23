import { Example1, IRequestCreateExample1DTO, IExample1Repository } from "@example1";

import { IPrepareCreateUseCase } from "@global_types"

class PrepareCreateExample1UseCase implements IPrepareCreateUseCase<Example1, IRequestCreateExample1DTO> {
  constructor(private readonly example1Repository: IExample1Repository) { }

  async execute(dto: IRequestCreateExample1DTO) {
    const example1AlreadyExists = await this.example1Repository.findByEmail(dto.Email)

    if (example1AlreadyExists) {
      throw new Error("Ops! Example1 já exite!")
    }

    const example1 = new Example1(dto)
    const saved = await this.example1Repository.save(example1)


    return await saved
  }
}

export { PrepareCreateExample1UseCase }