// import { ExampleLib01 } from "@externals"
// import { ExampleModuleText } from "@example"

import { ExampleModuleText } from "./src/Domain/ExampleModule/index.ts"

interface IApp {
  Example: string
}

const App: IApp = {
  Example: ExampleModuleText
}

export { App }
export type { IApp }
