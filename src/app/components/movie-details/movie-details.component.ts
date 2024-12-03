import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DurationPipe } from '../../duration.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [DurationPipe,RouterModule,CommonModule,DurationPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  public movie: any;
  constructor(private movieService: MoviesService,private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('movieId'); // Récupérer l'ID du film
    if (movieId) {
      this.movieService.getMovieById(movieId).subscribe({
        next: (data) => {
          console.log("details", data);
          this.movie = data; // Charger les détails du film
        },
        error: (error) => {
          console.error('Erreur lors de la récupération des détails du film :', error);
        }
    });
    }
  }

  goBack(): void {
    this.router.navigate(['/movies']); // Naviguer vers la liste des films
  }

}
