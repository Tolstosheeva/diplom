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

  getComment() {
    return this.comments;
  }

  add(commment:any) {
    this.comments.push({
      name: commment.name,
      email: commment.email,
      comment: commment.comment
    });
  }

  delete(i: number) {
    this.comments.splice(i, 1);
  }
}