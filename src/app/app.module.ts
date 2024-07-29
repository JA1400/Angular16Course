import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* needed to use two way binding */
/* we need ReactiveFormsModule for reactive forms */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioBComponent } from './portfolio-b/portfolio-b.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { HighlightElementDirective } from './highlight-element.directive';
import { PipesComponent } from './pipes/pipes.component';
import { AppendTextPipe } from './append-text.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ProductsComponent } from './products/products.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { PantsComponent } from './pants/pants.component';
import { ShoesComponent } from './shoes/shoes.component';
import { EmployeeService } from './dependencies/employee.service';
import { ProductService } from './dependencies/product.service';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { LogMessage1Service } from './services/log-message-1.service';
import { LogMessage2Service } from './services/log-message-2.service';
import { ADMIN_DATA } from './ADMIN_DATA/admin-data';
import { AdminDataService } from './services/admin-data.service';
import { MessageService } from './services/message.service';
import { AppConfigService } from './services/app-config.service';
import { AppUpdateService } from './services/app-update.service';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { AngularReactiveFormsComponent } from './angular-reactive-forms/angular-reactive-forms.component';
import { AdminGuardComponent } from './admin-guard/admin-guard.component';
import { FormGuardComponent } from './form-guard/form-guard.component';

/* export function showGreetingMessage() {
  const currentHour = new Date().getHours();
  let greetingMessage = '';

  if (currentHour >= 0 && currentHour < 12) {
    greetingMessage = 'Good morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = 'Good afternoon';
  } else {
    greetingMessage = 'Good evening';
  }

  return greetingMessage;
} */

@NgModule({
  declarations: [
    AppComponent,
    PortfolioBComponent,
    LifecycleHooksComponent,
    DecoratorsComponent,
    HighlightElementDirective,
    PipesComponent,
    AppendTextPipe,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    NewsComponent,
    ServicesComponent,
    ContactComponent,
    EmployeeComponent,
    PageNotFoundComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    ProductsComponent,
    ShirtsComponent,
    PantsComponent,
    ShoesComponent,
    ServiceExampleComponent,
    AngularFormsComponent,
    AngularReactiveFormsComponent,
    AdminGuardComponent,
    FormGuardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* we then import it */
    FormsModule,
    /* we then inport it */
    ReactiveFormsModule
  ],
  /* this makes services available for injection */
  /* any injectable is available to any component in the ngModule */
  providers: [
    EmployeeService,
    ProductService,
    /* We have to provide it to the module to make it available */
    AdminDataService,
    LogMessage1Service,
    /* provider is the token and useClass is the class you want to be injected */
    /* We are using a type token to inject the instance of this service */
    /* {provide: LogMessage1Service, useClass: LogMessage1Service}, */
    /* we can use the same token for a second class, however the last one will be overwritten */
    /* {provide: LogMessage1Service, useClass: LogMessage2Service} */
    /* we are using a string token. Not a good practice to use multiple same string providers */
    /* {provide: 'LOG_MSG1', useClass: LogMessage1Service},
    {provide: 'LOG_MSG2', useClass: LogMessage2Service} */
    /* here we are using a token object */
    /* {provide: 'LOG_MSG1', useClass: LogMessage1Service} */
    /* useValue is primarly used to provide constant values as a dependency */
    /* { provide: 'STR_MSG', useValue: 'this is the string message' }, */

    /* This is not really needed? */
    /* {provide: ADMIN_DATA, useValue: ADMIN_DATA} */

    /* this is used to reuse functionality of an already existing service/component */
    /* {
      provide: LogMessage2Service,
      useExisting: LogMessage1Service
    } */

    /* useFactory requires a fuction to invoke an instance of a service or provide a value */
    /* this is primarly used with async functions and data */
    /* it takes a funtion to dynamically create and configure objects */
    /* {
      provide: MessageService, useFactory: () => {
        return new MessageService();
      }
    } */

    /* AppConfigService,
    {
      provide: AppUpdateService, */
    /* we are injecting an instance of appConfigService as a parameter */
    /* we can now use its methods and properties */
    /* useFactory: (configService: AppConfigService) => {
      const config = configService.getAppConfig();
      return new AppUpdateService(config);
    }, */
    /* we need to put this dependency here as its needed in the factory function */
    /* this is only needed when other services or components need to be injected */
    /* deps: [AppConfigService]
  } */

    /* {
      provide: 'GREETING_MESSAGE_FACTORY',
      useFactory: showGreetingMessage,
    },
    {
      provide: 'GREETING_MESSAGE_VALUE',
      useValue: 'Hello',
    }, */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
