import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';


@NgModule({
    imports: [
      CommonModule
    ],
    providers: [
        ApiService,
        UserService,
        AuthService
    ],
    declarations: []
  })
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
  }