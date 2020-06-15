import { Injectable, Inject } from "@nestjs/common";
import { SomeModuleOptionsSymbol, SomeModuleOptions } from "./some.constants";

@Injectable()
export class SomeModuleApi {
  constructor(@Inject(SomeModuleOptionsSymbol) private readonly options: SomeModuleOptions) {
    console.log('Dependency provider works')
  }
}
