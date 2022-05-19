export class Banda {

  id: number;
  name: string;
  numberOfMembers: number;
  description: String;
  popularSongs: Array<String>;
  image: String;


  public constructor(id: number, name: string, numberOfMembers: number, description: String, popularSongs: Array<String>, image: String)
  {
    this.id=id;
    this.name=name;
    this.numberOfMembers=numberOfMembers;
    this.description=description;
    this.popularSongs=popularSongs;
    this.image=image;
  }
}
