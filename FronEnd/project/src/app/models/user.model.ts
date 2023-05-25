import { ICredentials } from './credential.model';

export class IUser{
    uid:number
    city: string | undefined
    contry: string|undefined
    mob : number | undefined
    name: string| undefined
    usercred:ICredentials | undefined;
    zipcode:number | undefined
}


