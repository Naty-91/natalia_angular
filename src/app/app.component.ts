import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FooterComponent } from './layout/layout/footer/footer.component';
import { HeaderComponent } from './layout//layout/header/header.component';
import { SidebarComponent } from './layout/layout/sidebar/sidebar.component';
import { MainComponent } from './layout/layout/main/main.component';

import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    FooterComponent,
    HeaderComponent,
    MainComponent,
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
