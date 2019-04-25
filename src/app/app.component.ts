import { Component, ViewChild, Inject } from '@angular/core';
import { Services } from './service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loginForm : FormGroup;

  ngOnInit(){
      this.loginForm = new FormGroup({
           'userData' : new FormGroup({
              'email': new FormControl(null, [Validators.required, Validators.email]),
              'password' : new FormControl(null, Validators.required)
          }),
           

      });
  }

  constructor(private services:Services, public snackBar: MatSnackBar){}

  submitData() {
    
      var requestedData={
        'finndata_code' : 'c4e1af3ddc9559363fe3e71a0232a787',
        'user_email': this.loginForm.get('userData.email').value,
        'user_password': this.loginForm.get('userData.password').value
      }
      var url='http://devapi.statbliss.com/user/login';

    	this.services.apiCall(url, requestedData)
    		.subscribe(
    			(response)=>{
              if(response.status=='Success')
              {
                console.log('success');
                this.snackBar.open(response.msg, 'Undo', {
                  duration: 2000,
                  verticalPosition: 'top',
                  horizontalPosition: 'end',
                });
                console.log(response.msg);
              }
              else if(response.status=='Failure')
              {
                console.log('failure');
                this.snackBar.open(response.msg, 'Undo', {
                  duration: 2000,
                  verticalPosition: 'top',
                  horizontalPosition: 'end',
                });
                console.log(response.msg);
              }
              else
              {
                this.snackBar.open('Something went wrong');
                console.log('Something went wrong');
              }
            },
      			err=>console.error(err)
    		);
  }

  onSubmit(){
    console.log(this.loginForm);
  }
 
}
