import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: [],
})
export class WeatherCardComponent {
    //dados da previsão do tempo recebidos pelo componente pai
  @Input() WeatherDatasInput!: WeatherDatas;



minTemperatureIcon = faTemperatureLow;
maxTemperatureIcon = faTemperatureHigh;
humidityIcon = faDroplet;
windIcon = faWind;


}
