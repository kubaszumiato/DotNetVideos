import {Component, Injectable, Input, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, AbstractControl, Control, Validators} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {AuthenticationService} from '../authentication.services';

@Component(
    {
        providers: [AuthenticationService],
        selector: 'user-login',
        template: require('./user-login.component.html')
    })

export class UserLoginComponent {
    loginForm: ControlGroup;

    constructor(

        private builder: FormBuilder,
        public authService: AuthenticationService) {
        this.loginForm = this.getForm(builder);
        console.log('login form:  ' + this.loginForm);

    }

    getForm(formBuilder: FormBuilder) {
        let result: ControlGroup;

        result = formBuilder.group({
            //control for the user's login, required value
            'login': ['', Validators.required],
            //control for password, required value
            'password': ['', Validators.required]
        });

        return result;
    }

    submitLogin() {
        let login: string = this.loginForm.controls['login'].value;
        let password: string = this.loginForm.controls['password'].value;
        var sub = this.authService.login(login, password)
            .subscribe(
            (res) => {
                console.log('logged in: ' + login);
            },
            (error) => console.log('error when trying to log in for user: ' + login + ' .The error returned is: ' + error));

    }


}