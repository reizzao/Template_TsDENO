// import { ExampleLib01 } from "@externals"
// import { ExampleModuleText } from "@example"

import { ExampleModule01 } from "./src/Domain/ExampleModule01/index.ts"

interface IApp {
  Example: string
}

const App: IApp = {
  Example: ExampleModule01
}

export { App }
export type { IApp }
