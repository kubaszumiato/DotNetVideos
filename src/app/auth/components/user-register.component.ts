import {Component, Injectable, Input, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, AbstractControl, Control, Validators} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {IUser} from '../../../../shared/data-models/user.model.interfaces';

@Component(
    {
        selector: 'user-register',
        template: require('./user-register.component.html')
    })

export class UserRegisterComponent {
  //  user: IUser;
    registerForm: ControlGroup = new ControlGroup( {});
    
    constructor(fb: FormBuilder){
        this.registerForm = fb.group({
            //control for the user's login, required value
            'login': ['', Validators.required],
            //control for password, required value
            'password': ['', Validators.required],
            //control for password verification, required value, custom validator to match password
            'passwordMatch': [''], //this.passwordMatchValidator],
            //video origin/source (YouTube, Vimeo, Channel9)
            'email': ['', Validators.required]
        });
        console.log(this.registerForm);
        
    }
    
    passwordMatchValidator(control: Control): { [s: string]: boolean } {
        let passwordMatchValue: string = control.value;
        let formPassword = this.registerForm.controls['password'].value;
        if ((formPassword && formPassword != '') && (!passwordMatchValue || passwordMatchValue !== formPassword)) {
            return { passwordDontMatch: true };
        }
    }
    
    
    submitForm(value: string):void {
        console.log(value);
    }
}