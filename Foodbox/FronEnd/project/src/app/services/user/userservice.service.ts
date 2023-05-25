import { authtoken } from 'src/app/models/authtoken.model';
import { IUser } from './../../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICredentials } from './../../models/credential.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  user:any;
  userloggedin:boolean = false;
  
  baseUrl: string = 'http://localhost:8082/api'

  constructor(private http: HttpClient) { }


  
  login(cred:ICredentials): Observable<authtoken>{        
       this.user = this.http.post<authtoken>(this.baseUrl + '/login', cred);
       return this.user;
  }

  register(creds:IUser):Observable<string>{
  return this.http.post<string>(this.baseUrl+'/user', creds)
  }

  setFlag(flag: boolean){

    this.userloggedin = flag;

  }


  isUserLoggedIn(): boolean{ 
    if(this.user!==null){
      this.userloggedin = true;
      return this.userloggedin;
    }
    else{
     this.userloggedin= false;
     return this.userloggedin;
     
    }
  }

  listAllUSers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.baseUrl+'/admin/allusers')
  }

  changeUserPassword(id:number, password:string): Observable<string>{
    return this.http.put<string>(this.baseUrl+'/users/'+id, <string>password);
  }

  logout(){
    localStorage.removeItem('uid');
    localStorage.removeItem('uname');
    this.setFlag(false);
  }

}
