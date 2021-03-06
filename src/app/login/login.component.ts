import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{
  data:any[];
  relations:any[];
  value:number[];
  names=[];
  username:string;
  password:string;
  spouse:string;
  usernamer:string;
  passwordr:string;
  constructor(private http:HttpClient) { }
  ngOnInit() 
  {
    let json = {username:"username3",password:"password3"};
      this.getData("https://www.mocky.io/v2/5e1e02a43600001cf4c74556");
      this.value=[];
  }
  temp:any[];
  calculation()
  {
    for(var i = 0;i<this.names.length;i++)
    {
      this.calc[i]= this.names[i][2]+this.calc[i]+this.names[i][1];
    }
  }
  getData(url:string)
  {
  /*  this.http.get(url)
    .subscribe(
      (data:any[])=>
      {
          this.data=data;
      }
    ) */
        var test;
    this.http.get(url).subscribe((data:any[])=>
    {
      console.log(data["user"][0]["username"]);
      console.log(data["user"][0]["password"]);
      this.data = data;
    })
  }
  showReg:boolean=false;
  changeName(name:any,name2:any)
  {
    for(var i=0;i<this.names.length;i++)
    {
      if(this.names[i][0]==name)
      {
        this.names[i][0]=name2;
        break;
      }
    }
    console.log(this.names);
  }
    changeName2(name:any,name2:any)
  {
    for(var i=0;i<this.names.length;i++)
    {
      if(this.names[i][0]==name)
      {
        this.calc[i]=name2;
        break;
      }
    }
    console.log(this.names);
  }
  calc=[];
  addPerson()
  {
    this.names.push([" ",0,0]);

    this.calc.push(0);
    var url="https://cadetbluetraumaticmachinelanguage.trentsmith1.repl.co/insert/r/"+this.name+"/"+"name"+"/1/0/0/0";
        this.http.get(url).subscribe((data:any[])=>
    {
      console.log(data["user"][0]["username"]);
      console.log(data["user"][0]["password"]);
      this.data = data;
    })
  }
  register()
  {
    this.showReg=!this.showReg;
  }

  registers()
  {
    var url = "https://cadetbluetraumaticmachinelanguage.trentsmith1.repl.co/insert/user/"+this.usernamer.toString()+"/"+this.passwordr.toString();
        this.http.get(url).subscribe((data:any[])=>{})
        console.log("success")

  }
  updateData(url:string)
  {
    let json = 
    {
      id:100,
      username:"username2",
      password:"password2"
    };
    url = "https://cadetbluetraumaticmachinelanguage--trentsmith1.repl.co/update/relations/"+this.username+"/n/1/2/3"
    this.http.put(url,json).subscribe(
      (data:any[])=>
      {
      }
    );
  }
  postData(url:string,json:any)
  {
    this.http.post(url, json).subscribe(
      (data: any[]) => 
      {
      }
    );
    console.log(json);
  }
  changeValue(n:number,name:any)
  {
    for(var i=0;i<this.names.length;i++)
    {
      if(this.names[i][0]==name)
      {
        this.names[i][1]=this.names[i][1]+n;
      }
    }
  }
    changeValue1(n:number,name:any)
  {
    for(var i=0;i<this.names.length;i++)
    {
      if(this.names[i][0]==name)
      {
        this.names[i][2]=this.names[i][2]+n;
      }
    }
  }
  name:string;
  onNameKeyUp(event:any)
  {
    this.name =event.target.value;
  }
  onPasswordKeyUp(event:any)
  {
    this.password =event.target.value;
  }
  onNamerKeyUp(event:any)
  {
    this.usernamer =event.target.value;
    console.log(this.usernamer);
  }
  onPasswordrKeyUp(event:any)
  {
    this.passwordr =event.target.value;
    console.log(this.passwordr);

  }  
  name1:any
  onNamesKeyUp(event:any)
  {
    this.name1 =event.target.value;
  }
  showInfo1:boolean=false;
  getUserbyUsername()
  {
    var i =0;
    console.log(this.data["user"]);
    for(i=0;i<this.data["user"].length;i++)
    {
      if(this.data["user"][i].username==this.name)
      {
        if(this.data["user"][i].password==this.password)
        {
          this.username=this.name;
          this.showInfo1=!this.showInfo1;
          console.log(this.username);
        }
      }
    }
  }
}