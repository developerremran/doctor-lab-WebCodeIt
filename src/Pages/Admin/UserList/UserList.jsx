import UserDataGet from "../../../API/UserDataGet";

 

const UserList = () => {
    const [user, refetch]= UserDataGet()
    console.log(user);
    return (
        <div>
            <h2>{user.length}</h2>
        </div>
    );
};

export default UserList;