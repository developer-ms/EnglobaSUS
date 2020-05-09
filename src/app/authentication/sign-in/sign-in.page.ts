import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SiginIn } from './sigin-in-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {


  signinGroup: FormGroup

  constructor(private formBuilder: FormBuilder, private nav: Router) { }



  ngOnInit() {
    this.signinGroup = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  enter(form: SiginIn){
    if(form.email == "paulo_machado_a@yahoo.com.br" && form.password == "123456"){
      this.nav.navigate(['/home'])
    }
    else{
      alert("Acesso Não Autorizado!")
    }
  }

}
