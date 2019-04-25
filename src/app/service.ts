import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()


export class Services {
	
	constructor (private http:Http){}

	apiCall(url, requestedData){
		console.log('apiCall');
		var data =btoa(JSON.stringify(requestedData));
		return this.http.post(url, {'data': data })
		.map((response:Response)=>{
			if(response.status==200)
			{console.log(response);
				const result=response.json();
				if(result.res)
				{
					return JSON.parse(atob(result.res));
				}
				else
				{
					return false;
				}
			}
			
			return false;
		});
	}
}