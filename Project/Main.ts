import { ExampleModule01 } from "@dep_example01"

interface IApp {
  Example: string
}

const App: IApp = {
  Example: ExampleModule01
}

export { App }
export type { IApp }
