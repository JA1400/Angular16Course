import { Inject, Injectable } from '@angular/core';

@Injectable()
export class AppUpdateService {
  /* we us any to allow the dependency to be injected into our variable */
  constructor(
    /* we need to add it here but not in the app.module since we are returning a string */
    @Inject('APP_UPDATE')
    private config: any) { }

  getAppUpdate(): string {
    const version = this.config.version;
    const environment = this.config.environment;
    const appName = this.config.appName;

    return `Welcome to '${appName}', v${version}, (${environment}) evironment`
  }
}
