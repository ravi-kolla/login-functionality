export default {
  login : user => {
    return fetch('/users/login',{
      method: "post",
      body: JSON.stringify(user),
      header: {
        'Content-Type' : 'application/json'
      }
    }).the(res => res.json())
      .then(data => data)
  },
  register : user => {
    return fetch('/users/register',{
      method: "post",
      body: JSON.stringify(user),
      header: {
        'Content-Type' : 'application/json'
      }
    }).the(res => res.json())
      .then(data => data)
  },
  logout : () => {
    return fetch('/user/logout')
            .then(res => res.json())
            .then(data => data);
  },
  isAuthenticated : () => {
    return fetch('/user/authenticated')
            .then(res=>{
              if(res.status !== 401)
                return res.json().then(data => data);
              else {
                return { isAuthenticated : false, user : {email:'',role:''}};
              }
            })
  }
}
