let userApi =  {
    //获取所有用户
    getUsers(){
        let userStr = localStorage.getItem('users');
        return userStr?JSON.parse(userStr):[];
    },
    createUser(user){
        let users = userApi.getUsers();
        user.id = users.length>0?users[users.length-1].id+1:1;
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));
    },
    getUser(id){
        return userApi.getUsers().find(user=>user.id==id);
    },
    delUser(id){
        let users = userApi.getUsers().filter(user=>user.id !=id);
        localStorage.setItem('users',JSON.stringify(users));
        return users;
    }
};
export default userApi;