import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  group
} from "@angular/animations";
import { ServicioService } from "../servicio.service";
import { Post } from "../Models/post";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("toggleBox", [
      // ...
      state(
        "open",
        style({
          height: "300px",
          backgroundColor: "rgba(51, 170, 51, .4)",
          textAlign: "center"
        })
      ),
      state(
        "closed",
        style({
          height: "18px",
          backgroundColor: "transparent",
          textAlign: "center"
        })
      ),
      transition("open => closed", [animate(".3s")]),
      transition("closed => open", [animate("0.3s")])
    ])
  ]
})
export class HomeComponent implements OnInit {
  arrBusqueda: Post[];
  fechaActual: Date;
  isOpen;
  numeroPost: number;
  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
  constructor(private postService: ServicioService) {
    this.arrBusqueda = [];
    this.numeroPost = 0;
  }

  getTime(params) {
    const date = new Date();
    console.log(date);
    if (params === "fecha") {
      return `${date.getDate()}/${date.getUTCMonth()}/${date.getFullYear()}`;
    } else {
      return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
  }

  async ngOnInit() {
    this.numeroPost = await this.postService.getNumeroPostes();

    setInterval(() => {
      this.fechaActual = new Date();
    }, 1000);
  }

  handelSearch(texto) {
    console.log(texto.target.value);
    this.postService
      .getByCatergoria(texto.target.value)
      .then(arrFiltrado => console.log(arrFiltrado));
    //this.arrBusqueda = arrFiltrado));
    console.log(this.arrBusqueda);
  }
}
