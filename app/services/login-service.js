import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { computed, set } from '@ember/object';

export default class LoginServiceService extends Service {
    @tracked user = null;

    @computed('user')
    get loggedIn(){
        return this.user !== null;
    }

    logOut(){
        this.user = null;
    }

}
