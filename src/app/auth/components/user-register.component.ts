import {Component, Injectable, Input, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, AbstractControl, Control, Validators} from 'angular2/common';
import {RouteParams} from 'angular2/router';

@Component(
    {
        selector: 'user-register',
        template: require('./user-register.component.html')
    })

export class UserRegisterComponent {
    
}