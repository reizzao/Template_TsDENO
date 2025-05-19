import { Example1 } from "../../../Model/Example1.ts";
import { IExample1Repository } from "../IExample1Repository.ts";


class MemoryExample1Repository implements IExample1Repository {
  public readonly collection: Example1[] = []

  async findByEmail(Email: string): Promise<Example1> {
    const example1 = await this.collection?.find(example1 => example1.Props.Email === Email)!
    return await example1
  }

  async save(example1: Example1): Promise<Example1> {
    this.collection.push(example1)
    return await example1
  }

}

export { MemoryExample1Repository }