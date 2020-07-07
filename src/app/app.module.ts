import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyupComponent } from './keyup/keyup.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { KeyUpTemplateVariableComponent } from './key-up-template-variable/key-up-template-variable.component';
import { KeyUpPseudoEventComponent } from './key-up-pseudo-event/key-up-pseudo-event.component';
import { KeyUpEnterBlurComponent } from './key-up-enter-blur/key-up-enter-blur.component';
import { LittleTourComponent } from './little-tour/little-tour.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyupComponent,
    LoopBackComponent,
    KeyUpTemplateVariableComponent,
    KeyUpPseudoEventComponent,
    KeyUpEnterBlurComponent,
    LittleTourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
