import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetEditComponent } from './cmps/pet-edit/pet-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { PetAppComponent } from './pages/pet-app/pet-app.component';
import { PetDetailsComponent } from './pages/pet-details/pet-details.component';
import { PetResolverService } from './services/pet-resolver.service';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: 'pet/:id',/* resolve: { pet: PetResolverService },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',*/ component: PetDetailsComponent
  },
  {
    path: '', component: PetAppComponent, canActivate: [AuthGuard], children: [
      { path: 'edit', component: PetEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
