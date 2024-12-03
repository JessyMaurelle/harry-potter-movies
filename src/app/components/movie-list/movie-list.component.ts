import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { DurationPipe } from '../../duration.pipe';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule,DurationPipe,FormsModule,RouterModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  movies : any[] =[];
  filteredMovies: any[] = [];
  titleFilter$ = new BehaviorSubject<string>('');//reactif aux changements
  yearFilter$ = new BehaviorSubject<string>('');

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void{
    this.moviesService.getAllMovies().subscribe((data:any) =>{
      this.movies = data;
      
      combineLatest([this.titleFilter$, this.yearFilter$]).subscribe(
    ([title, year]) => {

    this.filteredMovies = this.movies.filter((movie) =>{
      const matchesTitle = !title  || movie.title.toLowerCase().includes(title.toLocaleLowerCase());
      const matchesYear = !year || movie.release_date.startsWith(year);
      return matchesTitle && matchesYear;
    });
  }
);
});
}

// Méthodes pour mettre à jour les filtres
updateTitleFilter(event: Event): void {
  const inputElement = event.target as HTMLInputElement;  // Cast explicite de l'événement
  this.titleFilter$.next(inputElement.value);  // Utilise inputElement.value pour mettre à jour le filtre
}



updateYearFilter(event: Event): void {
  const inputElement = event.target as HTMLInputElement;  // Cast explicite
  this.yearFilter$.next(inputElement.value);  // Utiliser inputElement.value
}

}
