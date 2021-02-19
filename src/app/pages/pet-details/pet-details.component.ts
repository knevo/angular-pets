import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { mergeMap, mergeMapTo, switchMap } from 'rxjs/operators';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location, private petService: PetService) { }
  pet: Pet
  ngOnInit(): void {
    // Get pet from resolver
    this.pet = this.route.snapshot.data.pet

    // Subscrive to param change and load pet - WITHOUT RESOLVER
    this.route.paramMap.pipe(
      mergeMap(params => this.petService.getPetById(params.get('id')))
    ).subscribe(pet => {
      this.pet = pet
    })
  }
  onBack() {
    this.location.back()
  }
}
