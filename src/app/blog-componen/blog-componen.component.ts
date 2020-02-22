import { Component, OnInit } from "@angular/core";
import { ServicioService } from "../servicio.service";
import { Post } from "../Models/post";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-blog-componen",
  templateUrl: "./blog-componen.component.html",
  styleUrls: ["./blog-componen.component.css"]
})
export class BlogComponenComponent implements OnInit {
  arrTransito: Array<Post>;
  arrPost: Post[];
  constructor(
    private postService: ServicioService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.arrPost = [];
    this.arrTransito = [];
  }

  handelClick($event) {
    this.router.navigate(["/formulario"]);
  }
  // manejarCampoTexto($event) {
  //   this.postService.getByCatergoria($event.target.value).then(arrRecogido => {
  //     this.arrTransito = arrRecogido;
  //   });
  // }

  handelDelete(post) {
    console.log(post);
    this.postService
      .borarPost(post)
      .then(arrNuevo => (this.arrPost = arrNuevo));
  }

  async ngOnInit() {
    this.arrPost = await this.postService.getAllPosts();
    console.log(this.postService.arrPosts);
    this.postService
      .getAllPosts()
      .then(listaPost => (listaPost = this.arrPost));
  }

  handelSearch(texto) {
    if (texto.value === "all") {
      console.log(texto.value);
      this.postService
        .getAllPosts()
        .then(arrFiltrado => (this.arrPost = arrFiltrado));
    } else {
      console.log(texto.value);
      this.postService
        .getByCatergoria(texto.value)
        .then(arrFiltrado => (this.arrPost = arrFiltrado));
    }
  }
}
