// titulo, texto, autor, imagen (puede ser una url), fecha, categoria, id
export class Post {
  titulo: string;
  autor: string;
  imagen: string;
  categoria: string;
  fecha: string;
  texto: string;
  id: number;

  constructor(
    pTitulo: string,
    pAutor: string,
    pImagen: string,
    pCategoria: string,
    pFecha: string,
    pTexto: string
  ) {
    this.titulo = pTitulo;
    this.autor = pAutor;
    this.imagen = pImagen;
    this.categoria = pCategoria;
    this.fecha = pFecha;
    this.texto = pTexto;
    this.id = Math.floor(Math.random() * 1000000);
  }
}
