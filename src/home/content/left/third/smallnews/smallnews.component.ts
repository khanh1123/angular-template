import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-smallnews',
  standalone: true,
  imports: [],
  templateUrl: './smallnews.component.html',
  styleUrl: './smallnews.component.css'
})
export class SmallnewsComponent {
items: { image:string, title:string }[]= [
  {image:'../../../../../assets/img/img2.jpg', title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus optio nisi odit distinctio eveniet dolores eligendi. Sunt, porro suscipit deserunt illum maiores ut quidem laborum corrupti non, doloribus, ab pariatur qui facilis labore voluptas sed itaque vero similique! Repellendus quasi omnis laudantium dignissimos? Error maiores non modi minima tempore fugit porro ad necessitatibus odio, nobis consectetur aspernatur quos aperiam voluptas. Autem magni a praesentium provident deserunt! Possimus, consequuntur? Nulla facere quia, animi itaque, architecto eum dolorum minima repellat unde blanditiis facilis illum error? Doloribus eos similique perspiciatis porro, aperiam velit ad inventore error iure, repellat numquam accusantium! Vero, excepturi repellendus!'},
  {image:'../../../../../assets/img/img3.jpg', title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus optio nisi odit distinctio eveniet dolores eligendi. Sunt, porro suscipit deserunt illum maiores ut quidem laborum corrupti non, doloribus, ab pariatur qui facilis labore voluptas sed itaque vero similique! Repellendus quasi omnis laudantium dignissimos? Error maiores non modi minima tempore fugit porro ad necessitatibus odio, nobis consectetur aspernatur quos aperiam voluptas. Autem magni a praesentium provident deserunt! Possimus, consequuntur? Nulla facere quia, animi itaque, architecto eum dolorum minima repellat unde blanditiis facilis illum error? Doloribus eos similique perspiciatis porro, aperiam velit ad inventore error iure, repellat numquam accusantium! Vero, excepturi repellendus!'},
  {image:'../../../../../assets/img/img1.jpg', title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus optio nisi odit distinctio eveniet dolores eligendi. Sunt, porro suscipit deserunt illum maiores ut quidem laborum corrupti non, doloribus, ab pariatur qui facilis labore voluptas sed itaque vero similique! Repellendus quasi omnis laudantium dignissimos? Error maiores non modi minima tempore fugit porro ad necessitatibus odio, nobis consectetur aspernatur quos aperiam voluptas. Autem magni a praesentium provident deserunt! Possimus, consequuntur? Nulla facere quia, animi itaque, architecto eum dolorum minima repellat unde blanditiis facilis illum error? Doloribus eos similique perspiciatis porro, aperiam velit ad inventore error iure, repellat numquam accusantium! Vero, excepturi repellendus!'},
  {image:'../../../../../assets/img/img3.jpg', title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus optio nisi odit distinctio eveniet dolores eligendi. Sunt, porro suscipit deserunt illum maiores ut quidem laborum corrupti non, doloribus, ab pariatur qui facilis labore voluptas sed itaque vero similique! Repellendus quasi omnis laudantium dignissimos? Error maiores non modi minima tempore fugit porro ad necessitatibus odio, nobis consectetur aspernatur quos aperiam voluptas. Autem magni a praesentium provident deserunt! Possimus, consequuntur? Nulla facere quia, animi itaque, architecto eum dolorum minima repellat unde blanditiis facilis illum error? Doloribus eos similique perspiciatis porro, aperiam velit ad inventore error iure, repellat numquam accusantium! Vero, excepturi repellendus!'},
  {image:'../../../../../assets/img/img2.jpg', title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus optio nisi odit distinctio eveniet dolores eligendi. Sunt, porro suscipit deserunt illum maiores ut quidem laborum corrupti non, doloribus, ab pariatur qui facilis labore voluptas sed itaque vero similique! Repellendus quasi omnis laudantium dignissimos? Error maiores non modi minima tempore fugit porro ad necessitatibus odio, nobis consectetur aspernatur quos aperiam voluptas. Autem magni a praesentium provident deserunt! Possimus, consequuntur? Nulla facere quia, animi itaque, architecto eum dolorum minima repellat unde blanditiis facilis illum error? Doloribus eos similique perspiciatis porro, aperiam velit ad inventore error iure, repellat numquam accusantium! Vero, excepturi repellendus!'},
  {image:'../../../../../assets/img/img1.jpg', title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus optio nisi odit distinctio eveniet dolores eligendi. Sunt, porro suscipit deserunt illum maiores ut quidem laborum corrupti non, doloribus, ab pariatur qui facilis labore voluptas sed itaque vero similique! Repellendus quasi omnis laudantium dignissimos? Error maiores non modi minima tempore fugit porro ad necessitatibus odio, nobis consectetur aspernatur quos aperiam voluptas. Autem magni a praesentium provident deserunt! Possimus, consequuntur? Nulla facere quia, animi itaque, architecto eum dolorum minima repellat unde blanditiis facilis illum error? Doloribus eos similique perspiciatis porro, aperiam velit ad inventore error iure, repellat numquam accusantium! Vero, excepturi repellendus!'},
  {image:'../../../../../assets/img/img2.jpg', title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus optio nisi odit distinctio eveniet dolores eligendi. Sunt, porro suscipit deserunt illum maiores ut quidem laborum corrupti non, doloribus, ab pariatur qui facilis labore voluptas sed itaque vero similique! Repellendus quasi omnis laudantium dignissimos? Error maiores non modi minima tempore fugit porro ad necessitatibus odio, nobis consectetur aspernatur quos aperiam voluptas. Autem magni a praesentium provident deserunt! Possimus, consequuntur? Nulla facere quia, animi itaque, architecto eum dolorum minima repellat unde blanditiis facilis illum error? Doloribus eos similique perspiciatis porro, aperiam velit ad inventore error iure, repellat numquam accusantium! Vero, excepturi repellendus!'},
  {image:'../../../../../assets/img/img1.jpg', title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus optio nisi odit distinctio eveniet dolores eligendi. Sunt, porro suscipit deserunt illum maiores ut quidem laborum corrupti non, doloribus, ab pariatur qui facilis labore voluptas sed itaque vero similique! Repellendus quasi omnis laudantium dignissimos? Error maiores non modi minima tempore fugit porro ad necessitatibus odio, nobis consectetur aspernatur quos aperiam voluptas. Autem magni a praesentium provident deserunt! Possimus, consequuntur? Nulla facere quia, animi itaque, architecto eum dolorum minima repellat unde blanditiis facilis illum error? Doloribus eos similique perspiciatis porro, aperiam velit ad inventore error iure, repellat numquam accusantium! Vero, excepturi repellendus!'},
]
@Input() maxSlider = '';
}
