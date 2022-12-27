import { AiOutlineMenu, AiOutlineHome, AiOutlineUser, AiOutlineSetting,AiOutlineLogout } from 'react-icons/ai'
import { RxDashboard } from 'react-icons/rx'
import { BsBoxSeam } from 'react-icons/bs'
import { FiShoppingBag } from 'react-icons/fi'
export  const Options = [
    {name: "Dashboard", link: "/", icon: RxDashboard},
    {name: "User", link: "/user", icon: AiOutlineUser},
    {name: "Product", link: "/product", icon: BsBoxSeam},
    {name: "Sale", link: "/sale", icon: FiShoppingBag},
    {name: "Settings", link: "/settings", icon: AiOutlineSetting},
    {name: "Logout", link: "/logout", icon: AiOutlineLogout},
   
]