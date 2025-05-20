import { Example1, IExample1Repository } from "@example1";

// todo: implementar em json - temporariamente esta em memory

class JsonExample1Repository implements IExample1Repository {
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

export { JsonExample1Repository }