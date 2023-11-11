import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-card-skeleton',
  standalone: true,
  imports: [NgxSkeletonLoaderModule, MatCardModule],
  templateUrl: './card-skeleton.component.html',
  styleUrl: './card-skeleton.component.scss'
})
export class CardSkeletonComponent {

}
