import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class WeatherService {
  private readonly apiKey = process.env.WEATHER_API_KEY; // Weather API key

  constructor(private readonly httpService: HttpService) {}

  async getWeather(city: string): Promise<any> {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}&aqi=no`;

    const response = await this.httpService.get(apiUrl).toPromise();
    if (response && response.data) {
      return response.data;
    }
    throw new Error('Failed to fetch weather data');
  }
}
