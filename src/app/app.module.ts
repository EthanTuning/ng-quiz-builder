import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/editor-components/header/header.component';
import { SimpleimageComponent } from './components/editor-components/simpleimage/simpleimage.component';
import { QuoteComponent } from './components/editor-components/quote/quote.component';
import { CodeComponent } from './components/editor-components/code/code.component';
import { TableComponent } from './components/editor-components/table/table.component';
import { DelimeterComponent } from './components/editor-components/delimeter/delimeter.component';
import { ChecklistComponent } from './components/editor-components/checklist/checklist.component';
import { ListComponent } from './components/editor-components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimpleimageComponent,
    QuoteComponent,
    CodeComponent,
    TableComponent,
    DelimeterComponent,
    ChecklistComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
