import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [

  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {}
