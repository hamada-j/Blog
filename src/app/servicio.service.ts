import { Injectable } from "@angular/core";
import { Post } from "./Models/post";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PostAPI } from "./Models/postAPI";

@Injectable({
  providedIn: "root"
})
export class ServicioService {
  newPost: Post;
  arrPosts: Post[];
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "https://jsonplaceholder.typicode.com/albums/1/photos";
    // this.grabar_localStorage(this.arrPosts[1]);

    this.arrPosts = [
      new Post(
        "Titulo",
        "Autor",
        "https://image.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238584.jpg",
        "tech",
        "12:30, 6/15/2020",
        `texto...`
      ),
      new Post(
        "Titulo2",
        "Autor",
        "https://t3.ftcdn.net/jpg/01/84/56/74/240_F_184567447_ssCwWDn2ZJ6WwjLhS1TZZB4mBBuSEUBw.jpg",
        "hw",
        "12:30, 6/15/2020",
        "texto..."
      ),
      new Post(
        "Titulo3",
        "Autor",
        "https://static.dezeen.com/uploads/2020/02/desert-x-alula-installation-design_dezeen_2364_hero-1-852x479.jpg",
        "sw",
        "12:30, 6/15/2020",
        "test"
      ),
      new Post(
        "Titulo4",
        "Autor",
        // tslint:disable-next-line: max-line-length
        "https://previews.123rf.com/images/antonfoltin/antonfoltin1704/antonfoltin170400072/76352261-sonnenaufgang-in-sonoran-w%C3%BCste-in-der-n%C3%A4he-von-phoenix-arizona-.jpg",
        "tech",
        "12:30, 6/15/2020",
        "test"
      )
    ];
  }

  getAlls(): Promise<PostAPI[]> {
    return this.httpClient.get<PostAPI[]>(this.baseUrl).toPromise();
  }

  borarPost(id: number): Promise<any[]> {
    const prom = new Promise<any[]>((resolve, reject) => {
      const posicionPost = this.arrPosts.findIndex(post => {
        return post.id === id;
      });
      if (posicionPost !== -1) {
        this.arrPosts.splice(posicionPost, 1);
      }
      localStorage.setItem("posts", JSON.stringify(this.arrPosts));
      resolve(this.arrPosts);
    });
    return prom;
  }

  agregarPost(post: Post): Promise<Post> {
    const prom = new Promise<any>((resolve, reject) => {
      this.arrPosts = [post, ...this.arrPosts];
      resolve(this.arrPosts);
      console.log(this.arrPosts);

      localStorage.setItem("posts", JSON.stringify(this.arrPosts));
    });
    return prom;
  }

  grabar_localStorage(post) {
    localStorage.setItem("post", JSON.stringify(post));
  }

  getAllPosts(): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      const posts = JSON.parse(localStorage.getItem("posts")) || this.arrPosts;
      this.arrPosts = posts;
      resolve(this.arrPosts);
    });
    return prom;
  }
  recuperar_localStorage(post) {
    JSON.parse(localStorage.getItem("post"));
    console.log(post);
  }

  getByCatergoria(pCat: string): Promise<Post[]> {
    const prom = new Promise<any>((resolve, reject) => {
      const arrCat = this.arrPosts.filter(post => post.categoria === pCat);
      resolve(arrCat);
    });
    return prom;
  }

  getNumeroPostes() {
    const prom = new Promise<number>((resolve, reject) => {
      resolve(this.arrPosts.length);
    });
    return prom;
  }
}
