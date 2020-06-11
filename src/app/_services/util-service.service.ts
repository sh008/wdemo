import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {

  constructor() { }
  checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  sleep(sec) {
    return new Promise((res) => {
      setTimeout(res, sec * 1000);
    })
  }
}
