import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { BtnBarComponent } from './components/btn-bar/btn-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    BtnBarComponent
  ],
  imports: [
    BrowserModule
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
