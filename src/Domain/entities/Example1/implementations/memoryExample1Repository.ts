import { Example1, IExample1Repository } from "@example1";


class MemoryExample1Repository implements IExample1Repository {
  public readonly collection: Example1[] = []

  async findByEmail(Email: string): Promise<Example1> {
    const example1 = await this.collection?.find(example1 => example1.request.Email === Email)!
    return await example1
  }

  async save(model: Example1): Promise<Example1> {
    this.collection.push(model)
    return await model
  }

}

export { MemoryExample1Repository }