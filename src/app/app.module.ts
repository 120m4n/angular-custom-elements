import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { BtnBarComponent } from './components/btn-bar/btn-bar.component';
import { LatlonComponent } from './components/latlon/latlon.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    BtnBarComponent,
    LatlonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  // bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const button = createCustomElement(AppComponent, { injector : this.injector });
    customElements.define('app-button', button);
  }
}
