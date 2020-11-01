import Characters from '@modules/characters/infra/typeorm/entities/Characters';
// import ICreatePlaceDTO from '@modules/characters/dtos/ICreatePlaceDTO';

export default interface IPlacesRepository {
  // create(data: ICreatePlaceDTO): Promise<Place>;
  get(id: string): Promise<Characters>;
  index(): Promise<Characters[]>;
}
