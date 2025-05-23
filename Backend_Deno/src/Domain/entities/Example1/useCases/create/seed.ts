import { Example1RepositoriesOptionsInuse, fakeCreateExample1DTO, PrepareCreateExample1UseCase, IExample1Model, IExample1Repository } from "@example1";

type ISeddCreateExample1 = IExample1Model

const repoinuseByExample1Seed: IExample1Repository = new Example1RepositoriesOptionsInuse().memory()

// todo: implementar um createSeed

const seedCreateExample101 = await new PrepareCreateExample1UseCase(repoinuseByExample1Seed).execute(fakeCreateExample1DTO)


export { seedCreateExample101 }
export type { ISeddCreateExample1 }