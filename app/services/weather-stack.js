import Service from '@ember/service';


export default class WeatherStackService extends Service {

    baseUrl = 'http://api.weatherstack.com/';
    accessKey = 'ee217bddc983518eb794601abc653904';
    getCurrentWeather(query) {
        let _this = this;
        return new Promise(function(resolve, reject){
  
          let apiName = 'current';
          let url = _this.baseUrl+apiName+'?access_key='+ _this.accessKey+'&query=New York';
          let xhr = new XMLHttpRequest();
      
          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();
      
          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }
}
