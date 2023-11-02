
import { Component, OnInit } from '@angular/core';
import { ChuckNorrisApiService } from '../chuck-norris-api.service';

@Component({
  selector: 'chucknorris-facts',
  templateUrl: './chucknorris-facts.component.html',
  styleUrls: ['./chucknorris-facts.component.css']
})
export class ChucknorrisComponent implements OnInit {
  categories: string[] = [];
  filteredJokes: any[] =[];
  isVisible: boolean = false;
  randomJokes: { value: string } = { value: '' };
  

  constructor(private chuckNorrisApiService: ChuckNorrisApiService) { }

  ngOnInit(): void {
    this.getCategories();
  }


  //prendo le categorie dall'api service
  getCategories() {
    this.chuckNorrisApiService.getCategories()
      .subscribe(data => {
        this.categories = data;
      });
  }

  //mostra una barzelletta casuale
  getRandomJokes() {
    this.isVisible = true;

    this.chuckNorrisApiService.getRandomJoke()
      .subscribe(data => {
        this.randomJokes = data;
        console.log(this.randomJokes);
      });
      
  }


  //mostro le barzellette in base alla categoria scelta 
  getJokesByCategory(category: string) {
    this.chuckNorrisApiService.getJokesByCategory(category)
      .subscribe(data => {
        this.filteredJokes = data.value;
        console.log(this.filteredJokes)

      });
  }

  
  
}