import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetAppComponent } from './pages/pet-app/pet-app.component';
import { HttpClientModule } from '@angular/common/http';
import { PetListComponent } from './cmps/pet-list/pet-list.component';
import { PetPreviewComponent } from './cmps/pet-preview/pet-preview.component';
import { PetDetailsComponent } from './pages/pet-details/pet-details.component';
import { PetFilterComponent } from './cmps/pet-filter/pet-filter.component';
import { AboutComponent } from './pages/about/about.component';
import { PetEditComponent } from './cmps/pet-edit/pet-edit.component';
import { DateDescPipe } from './pipes/date-desc.pipe';
import { FilterArrPipe } from './pipes/filter-arr.pipe';
import { FetchJsonPipe } from './pipes/fetch-json.pipe';
import { InputColorDirective } from './directives/input-color.directive';

import mockServer from './app.mock';

mockServer();
@NgModule({
  declarations: [
    AppComponent,
    PetAppComponent,
    PetListComponent,
    PetPreviewComponent,
    PetDetailsComponent,
    PetFilterComponent,
    AboutComponent,
    PetEditComponent,
    DateDescPipe,
    FilterArrPipe,
    FetchJsonPipe,
    InputColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
