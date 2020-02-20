import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormularioComponentComponent } from "./formulario-component/formulario-component.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  group
} from "@angular/animations";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatDatepickerModule } from "@angular/material/datepicker";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogComponenComponent } from "./blog-componen/blog-componen.component";
import { HomeComponent } from "./home/home.component";
import { PostFromApiComponent } from "./post-from-api/post-from-api.component";

@NgModule({
  declarations: [
    AppComponent,
    BlogComponenComponent,
    FormularioComponentComponent,
    HomeComponent,
    PostFromApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
