import { UserService } from "src/app/authentication/services/user.service";
import { environment } from "src/environments/environment";

export abstract class FirebaseBaseDataService{
    constructor(private readonly userService:UserService){

    }

    protected getBaseUrl():string{
        return environment.firebase.databaseURL;
    }

    protected getUserToken():Promise<string>{
        return this.userService.userToken;
    }
}