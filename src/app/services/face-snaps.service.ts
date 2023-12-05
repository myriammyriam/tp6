import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps : FaceSnap[] = [
    {
    title:'Archiblad',
    description:"Mon meilleur ami depuis tout petit !",
    imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    createdDate:new Date(),
    snaps:0,
    buttonText:'oh snap'
  },
  {
    title:'three rock mountain',
    description:'endroit magnifique',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-ThreeRock_Mountain.jpg',
    createdDate:new Date(),
    snaps:0,
    buttonText:'oh snap'
  },
  {
    title:'fleur',
    description:"c est une fleur",
    imageUrl:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpause-maison.ouest-france.fr%2Fwp-content%2Fuploads%2F2022%2F10%2Ffleur-de-frangipanier.jpg.webp&tbnid=VAIT2w5sMM94eM&vet=12ahUKEwj6l9aKttWCAxXjYKQEHQ7AC3wQMygFegQIARB5..i&imgrefurl=https%3A%2F%2Fpause-maison.ouest-france.fr%2Ffleurs-jaunes%2F&docid=ZgnJGa2cqdSqWM&w=1208&h=742&q=fleur&ved=2ahUKEwj6l9aKttWCAxXjYKQEHQ7AC3wQMygFegQIARB5',
    createdDate:new Date(),
    snaps:0,
    buttonText:'oh snap'
  }
  ];
}
