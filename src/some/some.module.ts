import { DynamicModule } from '@nestjs/common';
import { SomeModuleOptions, SomeModuleOptionsSymbol } from './some-module.provider';
import { SomeModuleApi } from './some-module-api.provider';

export class SomeModule {
  static register(options: SomeModuleOptions): DynamicModule {
    return {
      imports: [],
      module: SomeModule,
      providers: [
        {
          provide: SomeModuleOptionsSymbol,
          useValue: options,
        },
        SomeModuleApi,
        SomeModule,
      ]
    }
  }
}
