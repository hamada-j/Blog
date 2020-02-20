import { Component } from "@angular/core";
import { Post } from "../app/Models/post";
import { Router } from "@angular/router";
import { ServicioService } from "./servicio.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: "Blog";

  constructor(private router: Router, private postService: ServicioService) {
    // this.grabar_localStorage();
    // this.recuperar_localStorage();
  }
  // grabar_localStorage() {
  //   const nombre: string = "someOne";
  //   const post = new Post("testStoge", "a", "z", "s", "2", "b");
  //   localStorage.setItem("nombre", nombre);
  //   localStorage.setItem("post", JSON.stringify(post));
  // }

  // recuperar_localStorage() {
  //   const nombre = localStorage.getItem("nombre");
  //   const post = JSON.parse(localStorage.getItem("post"));
  //   console.log(nombre, post);
  // }
  handelClickAPI($event) {
    this.router.navigate(["/posts_api"]);
  }
  handelClickHome($event) {
    // console.log($event);
    this.router.navigate(["/home"]);
  }

  handelClick($event) {
    // console.log($event);
    this.router.navigate(["/formulario"]);
  }
  handelClickAll($event) {
    // console.log($event);
    this.router.navigate(["/posts"]);
  }
}
