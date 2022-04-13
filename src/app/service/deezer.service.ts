import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataSearchAlbum } from '../model/Album';
import { Artist,DataSearchArtists } from '../model/Artist';
import { DataSearchTrack, Tracks } from '../model/Track';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  private TAG:string=null;

  constructor(private http: HttpClient) { }

  getArtists(artist:string):Promise<DataSearchArtists> {
    const url:string = `https://api.deezer.com/search/artist?q=artist:"${encodeURI(artist)}"`;
    return new Promise(resolve => {
    this.http.get(url).subscribe(data => {
    let json: DataSearchArtists = data as DataSearchArtists ;
    resolve(json);
    }, err => {
    console.log(err);
    });
    });
   }


   getAlbums(id:string):Promise<DataSearchAlbum>{
    const url:string = `https://api.deezer.com/artist/${id}/albums`;
    //return this.http.get(url);
    return new Promise(resolve => {
    this.http.get(url).subscribe(data => {
    let json: DataSearchAlbum = data as DataSearchAlbum ;
    resolve(json);
    }, err => {
    console.log(err);
    });
    });
   }

   getTracks(id:string):Promise<DataSearchTrack>{
    const url:string = `https://api.deezer.com/album/${id}`;
    return new Promise(resolve => {
    this.http.get(url).subscribe(data => {
    let json: DataSearchTrack = data as DataSearchTrack ;
    resolve(json);
    }, err => {
    console.log(err);
    });
    });
   }


}
