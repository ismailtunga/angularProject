import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Moduller ile componentler birleştirilen bundle
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]//çalıştırılabilir ilk component
})
export class AppModule { }
