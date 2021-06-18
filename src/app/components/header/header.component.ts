import { Component, OnInit } from '@angular/core';
import { GaleriaService } from 'src/app/services/galeria.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [GaleriaService],
})
export class HeaderComponent{}
