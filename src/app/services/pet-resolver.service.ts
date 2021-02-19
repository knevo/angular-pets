import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet.model';
import { PetService } from './pet.service';

@Injectable({
  providedIn: 'root'
})
export class PetResolverService implements Resolve<Observable<Pet>> {

  constructor(public petService: PetService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Pet> {
    const id = route.paramMap.get('id')
    return this.petService.getPetById(id)
  }
}
