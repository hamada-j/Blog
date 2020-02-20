import { Component, OnInit } from "@angular/core";
import { PostAPI } from "../Models/postAPI";
import { ServicioService } from "../servicio.service";

@Component({
  selector: "app-post-from-api",
  templateUrl: "./post-from-api.component.html",
  styleUrls: ["./post-from-api.component.css"]
})
export class PostFromApiComponent implements OnInit {
  arrTransito: Array<PostAPI>;
  arrPost: PostAPI[];
  fecha: any;
  constructor(private postService: ServicioService) {
    this.fecha;
  }

  getFecha() {
    const date = new Date();
    this.fecha = `${date.getHours()}:${date.getMinutes()}, ${date.getDay()}/${date.getDate()}/${date.getFullYear()}`;
  }

  async ngOnInit() {
    this.arrPost = await this.postService.getAlls();
  }
}
