import {Injectable} from 'angular2/core';
import {IUser} from '../../../../shared/data-models/user.model.interfaces'


@Injectable()
export class AuthenticationValidationService {

    static validateUser(entity: IUser): boolean {
        let result: boolean = true;
        
        if (!entity) {
            console.log('validation: user entity is empty');
            result = false;
        }

        //password must not be empty and must be at least 5 characters length
        if (!entity || entity.password.length < 5) {
            result = false;
            console.log('validation: password too short');
        }

        return result;
    }
}