import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
    someVar = false;
    @service weatherStack;
    @service loginService;
    @tracked signupFlow = false;
    @tracked username;
    @tracked password;
    @tracked confirm;

    @computed('loginService.loggedIn')
    get loggedIn(){
        return this.loginService.loggedIn;
    } 

    set signupFlow(val) {
        this.signupFlow = val;
    }
    

    @action
    getUsers(){
        this.store.findRecord('user',2);
    }

    @action
    getWeatherInfo(){
        this.weatherStack.getCurrentWeather("merrr");
    }

    @action
    logOut(){
        this.loginService.logOut();
    }

    @action
    signUp(){
        this.signupFlow = true;
    }


}
