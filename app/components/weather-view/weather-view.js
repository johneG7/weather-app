import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class WeatherViewComponent extends Component {
    @service weatherStack;
    @tracked city;
    @tracked location;
    @tracked currentWeather = [];
    @tracked forecastWeather = [];

    @action
    getCurrentWeather(){
        if(this.city){
            this.weatherStack.getCurrentWeather(this.city).then((data) => {
                this.currentWeather.push(data);
                
                // Trigger DOM update
                this.currentWeather = this.currentWeather;
            });            
        }
    }

    @action
    getForecast(){
        if(this.city){
            this.weatherStack.getCurrentWeather(this.city).then((data) => {
                this.forecastWeather.push(data);
                
                // Trigger DOM update
                this.forecastWeather = this.forecastWeather;
            });            
        }
    }

    @action
    closeWeatherBox(index){
        // remove item from list 
        this.currentWeather.splice(index, 1);
        
        // Trigger DOM update
        this.currentWeather = this.currentWeather;
    }
}
