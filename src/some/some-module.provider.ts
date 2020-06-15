import { Injectable, Inject } from '@nestjs/common';
import { SomeModuleApi } from './some-module-api.provider';

export interface SomeModuleOptions {
  apiEndpoint: string
}

export const SomeModuleOptionsSymbol = Symbol('SomeModuleOptions interface symbol for Nest DI')

@Injectable()
export class SomeModule {
  private readonly apiEndpoint: string
  constructor(
    // private readonly api: SomeModuleApi, // uncomment this line for it to die horribly
    @Inject(SomeModuleOptionsSymbol) options: SomeModuleOptions,
  ) {
    console.log("Dependent provider works")
  }
}
