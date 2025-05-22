import { example1RepositoriesOptions, fakeCreateExample1DTO, createExample1UseCaseFactory, IExample1Model, IExample1Repository } from "@example1";

type ISeddCreateExample1 = IExample1Model

const repoinuse: IExample1Repository = example1RepositoriesOptions.memory

const seedCreateExample101: ISeddCreateExample1 = await createExample1UseCaseFactory(repoinuse).execute(fakeCreateExample1DTO)


export { seedCreateExample101 }
export type { ISeddCreateExample1 }