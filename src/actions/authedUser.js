export const SET_LOGIN_AUTHED_USER = 'SET_LOGIN_AUTHED_USER'
export const SET_LOGOUT_USER = 'SET_LOGOUT_USER'

export function setLoginAuthedUser(id, name)
{
    console.log(" Id ", id );
    return {
        type : SET_LOGIN_AUTHED_USER,
        id,
        name,
    }
}

export function logoutUser(id)
{
    return {
        type : SET_LOGOUT_USER,
        id : null
    }
}