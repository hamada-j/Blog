import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { Post } from "../Models/post";

import { ServicioService } from "../servicio.service";
// import { from } from "rxjs";

@Component({
  selector: "app-formulario-component",
  templateUrl: "./formulario-component.component.html",
  styleUrls: ["./formulario-component.component.css"]
})
export class FormularioComponentComponent implements OnInit {
  arrPosting: Post[];
  post: FormGroup;
  constructor(
    private servcioPosting: ServicioService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.arrPosting = [];
    this.post = new FormGroup({
      titulo: new FormControl(" ", [
        Validators.required,
        Validators.minLength(3)
      ]),
      autor: new FormControl(" ", [
        Validators.required,
        Validators.minLength(3)
        //this.autorValidator
      ]),
      imagen: new FormControl("", [
        Validators.required
        // Validators.pattern(
        //   /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?:: (\d +)) ? (?: \/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
        // )
      ]),
      categoria: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      fecha: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),

      texto: new FormControl(" ", [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  handelClick($event) {
    this.router.navigate(["/posts"]);
  }

  onSubmit() {
    const date = new Date();
    const dateConstructor = `
    ${date.getHours()}:${date.getMinutes()},
     ${date.getDay()}/${date.getDate()}/${date.getFullYear()}`;
    const posting = new Post(
      this.post.value.titulo,
      this.post.value.autor,
      this.post.value.imagen,
      this.post.value.categoria,
      dateConstructor,
      this.post.value.texto
    );
    this.arrPosting.push(posting);
    this.servcioPosting.agregarPost(posting);
  }

  autorValidator(control) {
    const autorValue = control.controls.autor.value;
    console.log(autorValue);
    if (autorValue === "admin") {
      console.log("modo Admin");
    } else {
      console.log("autor");
    }
  }

  ngOnInit(): void {}
}
