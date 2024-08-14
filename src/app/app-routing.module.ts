import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ServicesComponent } from './services/services.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ProductsComponent } from './products/products.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { PantsComponent } from './pants/pants.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminGuardComponent } from './admin-guard/admin-guard.component';
import { testGuard } from './test.guard';
import { canDeactivateFn } from './form-guard.guard';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  //this is how we lazy load modules
  //we use the load children property that takes a callback function and returns a promise
  /* {
    path: 'first',
    loadChildren: () => import('./first/first.module').then(m => m.FirstModule)
  },
  {
    path: 'second',
    loadChildren: () => import('./second/second.module').then(m => m.SecondModule)
  } */
  /* we define the path and which component to render by name found in module.ts */
  /* { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }, */

  /* like in express, ** is the wildcard to all not found paths */
  /* { path: '**', component: PageNotFoundComponent } */

  /* We can also redirect instead */
  /* { path: '**', redirectTo: 'home' } */

  /* we can add parameters to our route */
  /* { path: 'employee/:empName/:empId', component: EmployeeComponent } */

  /* { */
  /* we specify the child routes in a children array */
  /* path: 'parent', component: ParentComponent, children: [
    { path: 'child1', component: Child1Component },
    { path: 'child2', component: Child2Component }
  ] */
  /* }, */

  /* { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'products', component: ProductsComponent,
    children: [ */
  /* represents a default or root path */
  /*      { path: '', redirectTo: 'shirts', pathMatch: 'full'},
       { path: 'shirts', component: ShirtsComponent },
       { path: 'pants', component: PantsComponent },
       { path: 'shoes', component: ShoesComponent },
     ]
   },
   { path: 'contact', component: ContactComponent }, */
  /* Good practice to redirect all other unmatched routes */
  /* { path: '**', redirectTo: '/home', pathMatch:'full'} */

  /* { path: 'employee/:id/:name', component: EmployeeComponent }, */
  /* { path: '', redirectTo:'/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent }, */

  /* { path: 'admin', component: AdminGuardComponent, canActivate: [testGuard] } */
  /* {
    path: 'home',
    canMatch: [adminGuard],
    loadChildren: ()=> import('./admin/admin.module').then((m)=>m.AdminModule)
  },
  {
    path: 'home',
    loadChildren: ()=> import('./user/user.module').then((m)=>m.UserModule)
  }, */

  //httpClientRoutes
  { path: '', redirectTo: 'products/home', pathMatch: 'full' }

];

@NgModule({
  /* Preloading loads the module but does not render it compared to normal which does both */
  /* and lazy which does none */
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
