import { ICreateExample1RequestDTO } from "@example1";

interface IExample1Model {
  ID: string
  Props: ICreateExample1RequestDTO
}

class Example1 {
  public readonly ID: string

  constructor(public readonly Props: ICreateExample1RequestDTO, ID?: string) {
    // Object.assign(this, Props)

    // OBS: preencher campos que nao virao do request aqui :
    this.ID = ID || "todo: makeID() - chamar aqui"
  }

}

export { Example1 }
export type { IExample1Model as IExample1 }