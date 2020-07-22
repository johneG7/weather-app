import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SignUpComponent extends Component {
    @service loginService;
    @service store;
    @tracked username;
    @tracked confirm;
    @tracked password;

    @action 
    completeSignUp(){ 
        if(this.password === this.confirm){
            console.log(username,password,confirm);
            let u = this.store.createRecord('user',{username: this.username, password: this.password});
            u.save();
            this.signupFlow = false;
        }
    }
}
