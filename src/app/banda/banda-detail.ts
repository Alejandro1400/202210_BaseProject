import { Banda } from "./banda";

export class BandaDetail extends Banda{

  constructor(id: number, name: string, numberOfMembers: number, description: String, popularSongs: Array<String>, image: String)
  {
    super(id, name, numberOfMembers, description, popularSongs, image);
  }

}
