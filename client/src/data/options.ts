import { AiOutlineMenu, AiOutlineHome, AiOutlineUser, AiOutlineSetting, AiOutlineLogout, AiOutlineShoppingCart } from 'react-icons/ai'
import { RxDashboard, RxHome } from 'react-icons/rx'
import { BsBoxSeam } from 'react-icons/bs'
import { FiShoppingBag } from 'react-icons/fi'





export const AllOptions = [

    { state: false, name: "Dashboard", link: "/dashboard", icon: RxDashboard },

    { state: false, name: "Settings", link: "/settings", icon: AiOutlineSetting },
    { state: true, name: "Logout", link: "", icon: AiOutlineLogout },

]

