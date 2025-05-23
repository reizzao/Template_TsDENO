
export class Helpers {

  static async createSeed(repomemory: any, prepare: any, fake: any): Promise<any> {
    const repoinuse = repomemory()
    return await new prepare(repoinuse).execute(fake)
  }

}
