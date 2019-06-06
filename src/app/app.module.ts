import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/quiz-components/header/header.component';
import { SimpleimageComponent } from './components/quiz-components/simpleimage/simpleimage.component';
import { QuoteComponent } from './components/quiz-components/quote/quote.component';
import { CodeComponent } from './components/quiz-components/code/code.component';
import { TableComponent } from './components/quiz-components/table/table.component';
import { DelimeterComponent } from './components/quiz-components/delimeter/delimeter.component';
import { ChecklistComponent } from './components/quiz-components/checklist/checklist.component';
import { ListComponent } from './components/quiz-components/list/list.component';
import { QuizComponent } from './components/builder-components/quiz/quiz.component';
import { TopbarComponent } from './components/builder-components/topbar/topbar.component';
import { BuilderComponent } from './components/builder-components/builder/builder.component';
import { HomePageComponent } from './components/home-page/home-page.component';

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
    ListComponent,
    QuizComponent,
    TopbarComponent,
    BuilderComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
