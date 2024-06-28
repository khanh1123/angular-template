import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {register as registerSwiperElemens} from 'swiper/element/bundle'

registerSwiperElemens();
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
