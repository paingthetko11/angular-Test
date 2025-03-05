import { Component, OnInit } from '@angular/core';
import { TownshipServices } from '../services/township.service';
import { RootModel } from '../models/root.model';

@Component({
  selector: 'app-township',
  imports: [],
  templateUrl: './township.component.html',
  styleUrl: './township.component.scss',
})
export class TownshipComponent implements OnInit {
  township: any[] = [];
  constructor(private townshipservives: TownshipServices) {}

  ngOnInit(): void {
    this.townshipservives.getjson().subscribe((res) => {
      let result = res as RootModel;
      this.township = result.data as any[];
    });
  }
}
