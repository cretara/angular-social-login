import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NzButtonModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
