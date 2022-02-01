import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ImportComponent } from './import/import.component';
import { FormComponent } from './form/form.component';
import { HelpComponent } from './help/help.component';
import { AppRoutingModule } from './router-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import  {MaterialModule} from './material/material.module';
import { FromFileComponent } from './help/from-file/from-file.component';
import { FromDeisyComponent } from './help/from-deisy/from-deisy.component';
import { App } from './spinner/src/app/app.component.html/app.component.html.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'


@NgModule({
  declarations: [
    AppComponent,
    ImportComponent,
    FormComponent,
    HelpComponent,
    FromFileComponent,
    FromDeisyComponent,
    App.Component.HtmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
