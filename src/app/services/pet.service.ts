import { Injectable } from '@angular/core';
import { Pet } from '../models/pet.model';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(private http: HttpClient) { }

  private BASE_URL = '/api/pet'

  private _pets$ = new BehaviorSubject<Pet[]>([]);
  public pets$ = this._pets$.asObservable()

  public loadPets(filterBy = { name: '' }) {
    this.http.get<Pet[]>(this.BASE_URL)
      .pipe(
        map(pets => {
          console.log(pets);

          return pets.filter(({ name }) => {
            return name.toLowerCase().includes(filterBy.name.toLowerCase());
          })
        })
      ).subscribe(pets => {
        this._pets$.next(pets);
      })
  }

  public removePet(petId) {
    return this.http.delete(this.BASE_URL + `/${petId}`).subscribe(data => {
      console.log(data);
      this.loadPets()
      // Does the same thing ~
      // const pets = this._pets$.getValue().filter(pet => pet._id !== petId)
      // this._pets$.next(pets);
    })
  }
  public getPetById(id) {
    console.log('get', id);

    return this.http.get<Pet>(this.BASE_URL + `/${id}`)
      .pipe(
        retry(1),
        catchError(() => throwError('no pet found!'))
      );
    //   const pet = this._pets.find(pet => pet._id === id)
    // return pet ? of(pet) : throwError('no pet found')
  }
  public add(pet) {
    return this.http.post<any>(this.BASE_URL, pet).subscribe(pet => this.loadPets())
  }
  shouldBuyPet(pet: Pet) {
    // TODO: UPDATE TO HttpClient
    return this.http.get<{ answer: string }>('https://yesno.wtf/api')
      .pipe(map(res => res.answer))
    // return res.data.answer
  }

}
