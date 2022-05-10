import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../../services/authentication.service";

@Injectable()

export class studentApi{
  constructor(
    private httpClient:HttpClient,
    private authservice: AuthenticationService,
  ) {
  }

  getCourses(){

  }

  checkAssistence(){

  }
}
