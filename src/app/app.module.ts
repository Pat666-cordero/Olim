import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importo esto
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { FixtureComponent } from './fixture/fixture.component';
import { NavarComponent } from './navar/navar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { JarwisService } from './Services/jarwis.service';
import { TokenService } from './Services/token.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FixtureComponent,
    NavarComponent,
    LoginComponent,
    FooterComponent
  ],
  //En aqui importo el HttpClientmodule
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [JarwisService,TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
