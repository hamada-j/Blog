export class PostAPI {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  constructor(
    pAlbumId: number,
    pId: number,
    pTitel: string,
    pUrl: string,
    pThumbnailUrl: string
  ) {
    this.albumId = pAlbumId;
    this.id = pId;
    this.title = pTitel;
    this.url = pUrl;
    this.thumbnailUrl = pThumbnailUrl;
  }
}
