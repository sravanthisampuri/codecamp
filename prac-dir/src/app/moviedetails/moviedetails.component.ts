import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {


  

  constructor(
    private route: ActivatedRoute
  ) { }
  movies = [
    {
      id: 1,
      language: "Telugu",
      name: "Kaala",
      genere: "Action"
    },
    {
      id: 2,
      language: "Telugu",
      name: "Nela Ticket",
      genere: "Horror"
    },
    {
      id: 3,
      language: "Telugu",
      name: "Abhimanyudu",
      genere: "Thriller"
    }
  ];
  movie = {
    movieName: '',
    language: '',
    genere: ''
  };
  public id;

  ngOnInit() {
    this.route.params.subscribe((params) => {

      this.id = params['id'];
      console.log(this.id)
    })
    this.filter();
  }
  filter() {
    for (let i = 0; i <= this.movies.length; i++) {
      if (this.id == this.movies[i].id) {
        this.movie.movieName = this.movies[i].name;
        this.movie.language = this.movies[i].language;
        this.movie.genere = this.movies[i].genere;
        break;
      }
    }

  }


}
