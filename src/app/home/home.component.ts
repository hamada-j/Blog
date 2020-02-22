import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
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
import { PostAPI } from "../Models/postAPI";

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
          height: "800px",
          backgroundColor: "#555"
        })
      ),
      state(
        "closed",
        style({
          height: "18px",
          backgroundColor: "transparent"
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
  arrLS: Post[];
  arrAPI: PostAPI[];
  lineChart = [];

  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
  constructor(private postService: ServicioService) {
    this.arrLS = [];
    this.arrAPI = [];
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
    this.arrLS = await this.postService.getAllPosts();
    this.arrAPI = await this.postService.getAlls();
    setInterval(() => {
      this.fechaActual = new Date();
    }, 1000);

    var myChart = new Chart("ctx", {
      type: "bar",
      data: {
        labels: ["LS", "API", "Connect", "Search`s", "System", "All"],
        datasets: [
          {
            label: "# of Post",
            data: [
              this.arrLS.length * 3,
              this.arrAPI.length,
              this.arrLS.length +
                this.arrBusqueda.length +
                this.arrAPI.length / 2,
              this.arrBusqueda.length + 5,
              this.arrAPI.length / 2,
              this.arrLS.length + this.arrBusqueda.length + this.arrAPI.length
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  handelSearch(texto) {
    this.postService
      .getByCatergoria(texto.target.value)
      .then(arrFiltrado => (this.arrBusqueda = arrFiltrado));
    console.log(this.arrBusqueda);
  }
}
