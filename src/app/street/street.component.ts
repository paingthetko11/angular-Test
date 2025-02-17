import { Component, OnInit } from '@angular/core';
import { StreetService } from '../services/street.service';
import { RootModel } from '../models/root.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-street',
  imports: [CommonModule],
  templateUrl: './street.component.html',
  styleUrl: './street.component.scss'
})
export class StreetComponent implements OnInit {
  street: any[] = [];

  constructor(private streetServices: StreetService) { }

  ngOnInit(): void {
    this.streetServices.getjson().subscribe((res) => {
      let result = res as RootModel;
      this.street = result.data as any[];
    })
  }

}
