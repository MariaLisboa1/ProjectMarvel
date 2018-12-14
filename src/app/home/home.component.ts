import { Component, OnInit } from '@angular/core';
import { MarvelServService } from '../service/marvel-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public obj: any;
  public heroes: any;
  public comics: any;
  public criators: any;

  constructor(
    private heroService: MarvelServService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllHeroes()
    this.getComics() 
    this.getCreators()   
  }

  getAllHeroes() {
    this.heroService.characters()
    .then(data=> {
      this.obj = data;
      this.comics = this.obj.data.results;    
    }) 
  }

  getComics(){   
    this.heroService.load()
    .then(data => {
      this.obj = data;
      this.heroes = this.obj.data.results;       
    });
  }
  
  getCreators(){
    this.heroService.creators()
    .then(data=>{
      this.obj = data
      this.criators = this.obj.data.results
      console.log(this.criators);      
    })
  }
}
