import { useDispatch, useSelector } from "react-redux";
import UserCircularAvatar from "./UserCircularAvatar";
import { RootState } from "../../../StateManagement/redux/store";
import PrimarySelect, { PrimarySelectOption } from "../../Common/select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userManager } from "../../../Data/DataSource/API/Authentication/user";
import { removeUser } from "../../../StateManagement/redux/userReducer";



enum Option {
    Logout = "logout",
    None = "none"
}
const options : PrimarySelectOption[] = [
    {
        label : "Logout",
        value: Option.Logout
    }
]

const UserProfileRow = () => {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();
    const [selected, setSelected] = useState("");
    const handleChange = (event: any) => {
        console.log(event.target.value);
        if(event.target.value){
            navigate("/")
            userManager.deleteUser()
            dispatch(removeUser())
        }
      };
    return (
        <>
          <div className="flex flex-row items-center pb-2 gap-1">
             <p className="text-white font-bold">{user?.username}</p>
             <UserCircularAvatar imgSrc={user?.profilePicPath} />
             <div className="relative">
            <select value={selected} onChange={handleChange} className="block appearance-none w-1/2 bg-fidarrgray-600 -mr-6 py-2 text-gray-700  rounded leading-tight focus:outline-none" id="grid-state">
             <option className="text-white"></option>
                    { options.map( o => <option className="text-white" value={o.value}>{o.label}</option> ) }
                    
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
             
          </div>
        </>
    )
}

export default UserProfileRow;