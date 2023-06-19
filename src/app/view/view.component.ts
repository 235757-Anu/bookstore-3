import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute,Navigation, Params, Router } from '@angular/router';
import { Book } from '../model/book';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  book: Book;

  // constructor(private route: ActivatedRoute, private service: ServicesService,private http: HttpClient) {}

  // ngOnInit() {
  //   const bookToView = this.service.getBookToView();
  //   if (bookToView) {
  //     this.book = bookToView;
  //   }
  // }

  // constructor(private route: Router) {
    // this.route.params.subscribe(params => {
    //   const bookParam = params['book'];
    //   if (bookParam) {
    //     this.book = JSON.parse(bookParam);
    //     console.log("THE BOOK"+this.book);
    //   }
    // });
  // }

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.book = navigation.extras.state['book'];
    } else {
      this.route.params.subscribe((params: Params) => {
        const bookParam = params['book'];
        if (bookParam) {
          this.book = JSON.parse(bookParam);
        }
      });
    }
  }
}