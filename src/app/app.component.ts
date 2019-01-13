import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog2';
  // tableau des entrées (posts) du blog
  posts =[ 
    {
      title: 'Blog 1',
      content: 'Ut maximus mollis gravida. Phasellus justo quam, pretium at mattis ut, dictum sed justo. Proin nec augue non dui varius posuere. Morbi blandit urna et risus gravida lobortis. Donec viverra justo et libero iaculis ultricies. Proin convallis lacinia auctor.',
      created_at: new Date()
    },
    {
      title: 'Blog 2',
      content: 'Ut maximus mollis gravida. Phasellus justo quam, pretium at mattis ut, dictum sed justo. Proin nec augue non dui varius posuere. Morbi blandit urna et risus gravida lobortis. Donec viverra justo et libero iaculis ultricies. Proin convallis lacinia auctor.',
      created_at: new Date()
    },
    {
        title: 'Blog 3',
        content: 'Ut maximus mollis gravida. Phasellus justo quam, pretium at mattis ut, dictum sed justo. Proin nec augue non dui varius posuere. Morbi blandit urna et risus gravida lobortis. Donec viverra justo et libero iaculis ultricies. Proin convallis lacinia auctor.',
        created_at: new Date()
    }
];

}
