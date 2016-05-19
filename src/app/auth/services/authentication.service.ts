import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {AuthenticationValidationService} from './authentication.validation.service';
import {IUser} from '../../../../shared/data-models/user.model.interfaces'
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthenticationService {
    private videoApiUrl: string = '/api/user';
    constructor(public http: Http) {
    }

    getVideos(): Observable<IUser> {
        return this.http.get('/api/user')
            .map<IUser[]>((res: Response) => res.json())
            .flatMap(vids => Observable.from(vids, _ => _))
            .filter(AuthenticationValidationService.validateUser)
            .do(res => console.log('All: ' + JSON.stringify(res)))
            .catch(this.handleGetVideosError);
    }

    handleGetVideosError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error occurred when retrieving list of users');
    }

    getVideo(id: string): Observable<IUser> {
        return this.http.get('/api/user/' + id)
            .map<IUser>((res: Response) => res.json())
            .do(res => console.log('Retrieved user: ' + JSON.stringify(res)))
            .catch(this.handleGetUserError);
    }

    private handleGetUserError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error occurred when retrieving user details');

    }

    getEmptyUser(): IUser {
        var result: IUser = {
            id: '',
            login: '',
            password: '',
            email: ''
        }

        return result;
    }

    createUser(data: IUser): Observable<IUser> {
        if (!AuthenticationValidationService.validateUser(data))
            return;

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var jsoned = JSON.stringify(data);
        console.log('service, createUser json: ' + jsoned);

        return this.http.post('/api/user', JSON.stringify(data),
            { headers: headers })
            .map(res => res.json());
    }
}