import { JsonExample1Repository, MemoryExample1Repository } from "@example1";


class Example1RepositoriesOptionsInuse {
  json() {
    return new MemoryExample1Repository()
  }

  memory() {
    return new JsonExample1Repository()
  }
}


export { Example1RepositoriesOptionsInuse }
