import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin:FormGroup;
  public isLogueo:boolean=null;
 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
   
    this.formLogin = this.fb.group({
      user  : ['', [ Validators.required, Validators.minLength(5) ]  ],
      pass: ['', [Validators.required,Validators.minLength(5)] ],
      
    });
  }


  //Chequea que se cumpla las validaciones

  get userNoValido(){
    return this.formLogin.get('user').invalid && this.formLogin.get('user').touched;
  }

  get passNoValido(){
    return this.formLogin.get('pass').invalid && this.formLogin.get('pass').touched;
  }

  enviar():boolean{
   let user = this.formLogin.get('user').value;
   let pass = this.formLogin.get('pass').value;

   if(user=='admin' && pass=='admin'){
    console.log('ENTRO BIEN');
    this.isLogueo=true;
    return this.isLogueo;
   }else{
    console.log('NO ENTRO');
    this.isLogueo = false;
    console.log('valgo',this.isLogueo);
    
    return this.isLogueo;
   }

  }



}
