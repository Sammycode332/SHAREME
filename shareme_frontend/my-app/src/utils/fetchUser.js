export const fetchUser = ()=>{
    const userInfo = localStorage.getItem('user') !== 'undefined'

    return userInfo;
}