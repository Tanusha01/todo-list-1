import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule {}
