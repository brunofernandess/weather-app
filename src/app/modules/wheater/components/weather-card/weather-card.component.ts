import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: [],
})
export class WeatherCardComponent implements OnInit {
  @Input() WeatherDatasInput!: WeatherDatas;

  ngOnInit(): void {

      console.log('DADOS RECEBIDOS DO COMPONENTE PAI - WEATHER-CARD:', this.WeatherDatasInput);
  }


}
