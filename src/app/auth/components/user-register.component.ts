import {Component, Injectable, Input, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, AbstractControl, Control, Validators} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {IUser} from '../../../../shared/data-models/user.model.interfaces';
import {AuthenticationService} from '../authentication.services';

@Component(
    {
        providers: [AuthenticationService],
        selector: 'user-register',
        template: require('./user-register.component.html')
    })

export class UserRegisterComponent implements OnInit {
    ngOnInit() {
        console.log('oninit');
       // this.user = this.authService.getEmptyUser();

    }
    public user: IUser;
    registerForm: ControlGroup;

    constructor(

        private builder: FormBuilder,
        public authService: AuthenticationService) {
        this.user = this.authService.getEmptyUser();//<IUser>{};//
        console.log('constructor');
        this.registerForm = this.getForm(builder);
        console.log('register form:  ' + this.registerForm);

    }

    getForm(formBuilder: FormBuilder) {
        let result: ControlGroup;

        result = formBuilder.group({
            //control for the user's login, required value
            'login': ['', Validators.required],

            //control for password, required value
            'password': ['', Validators.required],
            //control for password verification, required value, custom validator to match password
            'passwordMatch': [''],//, this.passwordMatchValidator],

            'email': ['', Validators.required],

            'role': ['']
        });       

        return result;
    }

    passwordMatchValidator(control: Control): { [s: string]: boolean } {
        let passwordMatchValue: string = control.value;
        let formPassword = this.registerForm.controls['password'].value;
        if ((formPassword && formPassword != '') && (!passwordMatchValue || passwordMatchValue !== formPassword)) {
            return { passwordDontMatch: true };
        }
    }


    submitForm(value: string): void {
        console.log(value);
        this.user.username = this.registerForm.controls['login'].value;
        this.user.password = this.registerForm.controls['password'].value;
        this.user.email = this.registerForm.controls['email'].value;
        this.user.role = this.registerForm.controls['role'].value;

        this.authService.createUser(this.user);
    }
}