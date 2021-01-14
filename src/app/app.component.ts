import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './shared/data.service';
import { Comment } from './shared/models/comment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  comments!: Comment[];
  formCommment!: FormGroup;


  get form() {
    return this.formCommment.controls;
  }

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {}

  
  ngOnInit(): void {
    this.formCommment = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', [Validators.required, Validators.maxLength(150)]]
    });
    this.comments = this.dataService.getComment();
  }


  add() {
    console.log(this.formCommment.value);
    this.dataService.add(this.formCommment.value);
    this.formCommment.reset({
      name: '',
      email: '',
      comments: ''
    })
  }

  delete(i: number) {
    this.dataService.delete(i);
  }
}
