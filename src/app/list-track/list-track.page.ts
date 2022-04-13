import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../model/Album';
import { DataSearchTrack, Datum2, Tracks } from '../model/Track';
import { DeezerService } from '../service/deezer.service';

@Component({
  selector: 'app-list-track',
  templateUrl: './list-track.page.html',
  styleUrls: ['./list-track.page.scss'],
})
export class ListTrackPage implements OnInit {

  private id:string;
  private dataSearchTrack:DataSearchTrack;
  private album:Album;
  private audio: HTMLAudioElement;
  private currentTrack:Datum2;
  constructor(private activatedRoute:ActivatedRoute,private ds:DeezerService,private router:Router) { }

  async ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.dataSearchTrack= await this.ds.getTracks(this.id);
  }

  play(track){
    this.currentTrack = track;
    
    this.audio = new Audio();
    this.audio.pause();
    this.audio.src = track.preview;
    this.audio.load();
    this.audio.play();

  }

  pause()
  {
    this.currentTrack = null;
    this.audio.pause();
  }

}
