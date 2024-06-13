import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [FirstComponent, SecondComponent, ThirdComponent],
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LeftComponent {
  items: { title: string; image: string; id: number }[] = [
    {
      id: 1,
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis similique vero deleniti numquam beatae ipsam itaque dignissimos voluptatibus modi pariatur consectetur accusamus saepe eum, sit laboriosam magnam minima! Facere alias obcaecati earum ex vel rerum laboriosam hic est voluptate porro voluptatem veniam laborum exercitationem laudantium omnis rem aliquam id minima eligendi aut ullam sunt provident, ea vero! Distinctio et repudiandae nihil atque, officiis, mollitia laborum sint voluptas, aperiam qui tempore vitae earum quidem placeat molestiae neque necessitatibus. Eligendi minima perferendis mollitia voluptas explicabo, asperiores nulla quidem minus nostrum neque! Commodi voluptates explicabo unde, amet ipsa incidunt temporibus repudiandae in?',
      image: '../../../../assets/img/img1.jpg',
    },
    {
      id: 2,
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis similique vero deleniti numquam beatae ipsam itaque dignissimos voluptatibus modi pariatur consectetur accusamus saepe eum, sit laboriosam magnam minima! Facere alias obcaecati earum ex vel rerum laboriosam hic est voluptate porro voluptatem veniam laborum exercitationem laudantium omnis rem aliquam id minima eligendi aut ullam sunt provident, ea vero! Distinctio et repudiandae nihil atque, officiis, mollitia laborum sint voluptas, aperiam qui tempore vitae earum quidem placeat molestiae neque necessitatibus. Eligendi minima perferendis mollitia voluptas explicabo, asperiores nulla quidem minus nostrum neque! Commodi voluptates explicabo unde, amet ipsa incidunt temporibus repudiandae in?',
      image: '../../../../assets/img/img2.jpg',
    },
    {
      id: 3,
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis similique vero deleniti numquam beatae ipsam itaque dignissimos voluptatibus modi pariatur consectetur accusamus saepe eum, sit laboriosam magnam minima! Facere alias obcaecati earum ex vel rerum laboriosam hic est voluptate porro voluptatem veniam laborum exercitationem laudantium omnis rem aliquam id minima eligendi aut ullam sunt provident, ea vero! Distinctio et repudiandae nihil atque, officiis, mollitia laborum sint voluptas, aperiam qui tempore vitae earum quidem placeat molestiae neque necessitatibus. Eligendi minima perferendis mollitia voluptas explicabo, asperiores nulla quidem minus nostrum neque! Commodi voluptates explicabo unde, amet ipsa incidunt temporibus repudiandae in?',
      image: '../../../../assets/img/img3.jpg',
    },
    {
      id: 4,
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis similique vero deleniti numquam beatae ipsam itaque dignissimos voluptatibus modi pariatur consectetur accusamus saepe eum, sit laboriosam magnam minima! Facere alias obcaecati earum ex vel rerum laboriosam hic est voluptate porro voluptatem veniam laborum exercitationem laudantium omnis rem aliquam id minima eligendi aut ullam sunt provident, ea vero! Distinctio et repudiandae nihil atque, officiis, mollitia laborum sint voluptas, aperiam qui tempore vitae earum quidem placeat molestiae neque necessitatibus. Eligendi minima perferendis mollitia voluptas explicabo, asperiores nulla quidem minus nostrum neque! Commodi voluptates explicabo unde, amet ipsa incidunt temporibus repudiandae in?',
      image: '../../../../assets/img/img2.jpg',
    },
  ];
  selectedImage: { title: string; image: string; id: number } = {
    image: this.items[0].image,
    id: this.items[0].id,
    title: this.items[0].title,
  };

  handleGetCurrentImage(item: { image: string; title: string; id: number }) {
    console.log('parent', item);
    this.selectedImage = {
      image: item.image,
      id: item.id,
      title: item.title,
    };
  }
}
