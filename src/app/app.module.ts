import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './filter.pipe';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FooterComponent,
    FilterPipe,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
