import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MakeService } from './services/make.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    MakeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
