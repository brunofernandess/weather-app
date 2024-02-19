import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import { WeatherService } from './../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit, OnDestroy  {
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'Itabaianinha';
  weatherDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService){}


  ngOnInit(): void {
      this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void{
    this.weatherService.getWeatherDatas(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {

        response && (this.weatherDatas = response);
        this.weatherDatas.wind.speed = this.weatherDatas.wind.speed * 3.6;
        console.log(this.weatherDatas);
      },
      error: (error) => console.log(error),
    });


  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(): void{
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

}

