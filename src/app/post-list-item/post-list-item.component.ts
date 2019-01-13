import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  click :number= 0;
  like(){
    this.click++;
  }
  dislike(){
   this.click--;
  }
 
  getColor() {
    if(this.click > 0) {
      return 'green';
    } else if(this.click < 0) {
      return 'red';
    }
  }
 
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: object;
  constructor() { }

  ngOnInit() {
    
   
   
  }

  
}
