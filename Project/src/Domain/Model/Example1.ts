
interface Example1PropsModel {
  ID: string
  Nome: string
  Sobrenome: string
}

class Example1 {

  constructor(private readonly Props: Example1PropsModel,) {
    this.Props.ID = Props.ID || "todo: makeID() - chamar aqui"
  }

}

export { Example1 }