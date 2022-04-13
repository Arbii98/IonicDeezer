import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album, DataSearchAlbum } from '../model/Album';
import { DeezerService } from '../service/deezer.service';

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.page.html',
  styleUrls: ['./list-album.page.scss'],
})
export class ListAlbumPage implements OnInit {

  private id:string;
  private dataSearchAlbum:DataSearchAlbum;
  constructor(private activatedRoute:ActivatedRoute,private ds:DeezerService,private router:Router) { }

  async ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.dataSearchAlbum= await this.ds.getAlbums(this.id);
  }

  goToTitres(album:Album)
  {
    this.router.navigate([`/list-track/${album.id}`]);
  }
}
