import { 
     SET_LOGIN_AUTHED_USER,
      SET_LOGOUT_USER
    } from '../actions/authedUser'


export default function authedUser(state = {}, action)
{
    console.log(" Action name ", action.type);
    console.log(" Action name ", state);

    switch(action.type){
        case SET_LOGIN_AUTHED_USER :
            return {
                id : action.id,
                name : action.name

            }
        case SET_LOGOUT_USER :
            return null;
        default :
            return state;
    }
}