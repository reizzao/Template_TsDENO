
export interface IPrepareCreateUseCase<T, D> {
  execute: (dto: D) => Promise<T>
}

export interface RepositoriesOptions<T> {
  json: T,
  memory: T,
}