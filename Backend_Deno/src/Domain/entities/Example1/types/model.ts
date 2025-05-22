import { IRequestCreateExample1DTO } from "@example1";

interface IExample1Model {
  ID: string
  Request: IRequestCreateExample1DTO
}

class Example1 {
  public readonly ID: string

  constructor(public readonly Request: IRequestCreateExample1DTO, ID?: string) {
    // Object.assign(this, Props)

    // OBS: preencher campos que nao virao do request aqui :
    this.ID = ID || "todo: makeID() - chamar aqui"
  }

}

export { Example1 }
export type { IExample1Model }