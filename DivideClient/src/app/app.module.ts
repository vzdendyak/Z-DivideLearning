import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PracticePageComponent} from './practice/practice-page/practice-page.component';
import {Router, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MenuPageComponent} from './menu/menu-page/menu-page.component';
import {LearningPageComponent} from './learning/learning-page/learning-page.component';
import {MatButtonModule} from "@angular/material/button";
import { SummaryPageComponent } from './summary/summary-page/summary-page.component';
import { TestPageComponent } from './test/test-page/test-page.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PracticePageComponent,
    MenuPageComponent,
    LearningPageComponent,
    SummaryPageComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
        {path: 'learning', component: LearningPageComponent},
        {path: 'practice', component: PracticePageComponent},
        {path: 'test', component: TestPageComponent},
        {path: 'summary', component: SummaryPageComponent},
        {path: 'menu', component: MenuPageComponent},
        {path: '**', redirectTo: 'menu'}
      ]
    ),
    HttpClientModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
