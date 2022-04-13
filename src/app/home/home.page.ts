import { Component } from '@angular/core';
import { DeezerService } from '../service/deezer.service';
import { Artist,DataSearchArtists } from '../model/Artist';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private dataSearchArtists:DataSearchArtists;

  constructor(private ds:DeezerService,private router:Router) {}


  async onSearchArtist(event){
    console.log("Value : "+event.target.value);
    this.dataSearchArtists=  await this.ds.getArtists(event.target.value);
    console.log(this.dataSearchArtists);
  }


  goToAlbum(artist:Artist)
  {
    this.router.navigate([`/list-album/${artist.id}`]);
  }

}
