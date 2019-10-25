import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-collections',
  templateUrl: './movie-collections.component.html',
  styleUrls: ['./movie-collections.component.css']
})
export class MovieCollectionsComponent implements OnInit {
title = 'My new title';
movies;

  constructor(movieObj: MovieService) {
    this.movies = movieObj.getMovie();

   }

  ngOnInit() {
  }

}
