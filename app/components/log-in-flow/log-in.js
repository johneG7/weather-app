import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LogInComponent extends Component {
    @service store;
    @service loginService;
    @tracked username = "";
    @tracked password = "";

    @action 
    verifyCredentials(){
        if(this.password && this.username){
            this.store.queryRecord('user', {filter: {password: this.password, username: this.username}}).then((u)=>{
                this.loginService.user = u;
            });
        }
    }
}
