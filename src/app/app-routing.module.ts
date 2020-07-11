import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { FixtureComponent} from './fixture/fixture.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';


const routes: Routes = [
  /*{ path:"", component: HomeComponent},
    {path:"fixture", component: FixtureComponent},*/
    { path: "", component:InicioComponent},
    { path: "inicio", component: InicioComponent},
    { path: "login", component: LoginComponent,
      CanActivate: [BeforeLoginService]
    },
    { 
      path: "fixture", component: FixtureComponent,
      CanActivate: [AfterLoginService] 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
