import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout//header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';


import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    FooterComponent,
    HeaderComponent,
    
    SidebarComponent,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'natalia_angular';
}
