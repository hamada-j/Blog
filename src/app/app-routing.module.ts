import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { FormularioComponentComponent } from "./formulario-component/formulario-component.component";
import { BlogComponenComponent } from "./blog-componen/blog-componen.component";
import { PostFromApiComponent } from "./post-from-api/post-from-api.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "formulario",
    component: FormularioComponentComponent
  },
  {
    path: "posts",
    component: BlogComponenComponent
  },
  {
    path: "posts_api",
    component: PostFromApiComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
