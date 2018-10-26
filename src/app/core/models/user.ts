
export class User{
    name:string;
    image:string;
    provider:string;
    email:string;
    uid:string;
    lastLogin:Date;
    games:Array<string>;
    static fromAuthUser(authUser:firebase.User):User{
        const user = new User();
        user.name = authUser.displayName;
        user.email = authUser.email;
        user.image = authUser.photoURL
        user.provider = authUser.providerData[0].providerId;
        user.uid = authUser.uid;
        if(user.provider == 'password'){
            user.image = 'http://dsi-vd.github.io/patternlab-vd/images/fpo_avatar.png';          
        }
        else{
            user.image = authUser.photoURL;                    
        }
        return user;
    }
}