import { Injectable, Inject } from '@nestjs/common';
import { SomeModuleApi } from './some-module-api.provider';
import { SomeModuleOptions, SomeModuleOptionsSymbol } from './some.constants';


@Injectable()
export class SomeModuleProvider {
  private readonly apiEndpoint: string
  constructor(
    private readonly api: SomeModuleApi, // uncomment this line for it to die horribly
    @Inject(SomeModuleOptionsSymbol) options: SomeModuleOptions,
  ) {
    console.log("Dependent provider works")
  }
}
