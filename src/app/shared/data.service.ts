import { Injectable } from '@angular/core';
import { Comment } from './models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  addComment(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  comments: Comment [] = [];

  getCom() {
    return this.comments;
  }

  addCom(com: any) {
    this.comments.push({
      name: com.name,
      email: com.email,
      comment: com.comment
    });
  }

  deleteCom(i: number) {
    this.comments.splice(i, 1);
  }
}