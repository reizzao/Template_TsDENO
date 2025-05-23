
export class Helpers {

  static async createSeed(repomemory: any, prepare: any, fake: any): Promise<any> {
    const repoinuse = repomemory()
    return await new prepare(repoinuse).execute(fake)
  }

}

/*

type ISeddCreateExample1 = IExample1Model

const repoinuseByExample1Seed: IExample1Repository = new Example1RepositoriesOptionsInuse().memory()

// todo: implementar um createSeed

const seedCreateExample101 = await new PrepareCreateExample1UseCase(repoinuseByExample1Seed).execute(fakeCreateExample1DTO)

*/