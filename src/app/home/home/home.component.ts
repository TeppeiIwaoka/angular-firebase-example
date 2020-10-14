import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from 'src/app/interfaces/pet';
import { AuthService } from 'src/app/services/auth.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pet: Pet = {
    petImageId: 1,
    name: 'test',
    exp: 200,
    level: 4,
    trainerId: '1',
    gender: 'male'
  };

  pet$: Observable<Pet> = this.petService.getPet(
    this.authService.uid
  );

  constructor(
    private petService: PetService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
