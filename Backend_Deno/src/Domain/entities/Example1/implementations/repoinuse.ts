import { JsonExample1Repository, MemoryExample1Repository } from "@example1";


class Example1RepositoriesOptionsInuse {
  static json() {
    return new MemoryExample1Repository()
  }

  static memory() {
    return new JsonExample1Repository()
  }
}


export { Example1RepositoriesOptionsInuse }
