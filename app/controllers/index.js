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

    @computed('loginService.loggedIn')
    get loggedIn(){
        return this.loginService.loggedIn;
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

    @action 
    completeSignUp(username,password,confirm){ 
        if(password === confirm){
            console.log(username,password,confirm);
            let u = this.store.createRecord('user',{username: username, password: password});
            u.save();
            this.signupFlow = false;
        }
    }
}
