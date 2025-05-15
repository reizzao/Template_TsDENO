import { MemoryExample1Repository } from "../../Repositories/Implementations/MemoryExample1Repository.ts";
import { CreateExample1UseCase } from "./CreateExample1UseCases.ts";

// Instanciando Repositorios
const memoryExample1Repository = new MemoryExample1Repository()

// Important : Repositorio InUse - definir aqui

const Important_Example1Repository = memoryExample1Repository

// Use important Repository

const createExample1Usecase = new CreateExample1UseCase(Important_Example1Repository)

export { createExample1Usecase }