import { Example1RepositoriesOptionsInuse, fakeCreateExample1DTO, PrepareCreateExample1UseCase, IExample1Model, } from "@example1";
import { Helpers } from "@helpers"

export type ISeddCreateExample1 = IExample1Model

const createExample1ProSeed = await Helpers.createSeed(
  Example1RepositoriesOptionsInuse.memory,
  PrepareCreateExample1UseCase,
  fakeCreateExample1DTO
)

export const seedCreateExample101 = createExample1ProSeed
