import { AiOutlineMenu, AiOutlineHome, AiOutlineUser, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai'
import { RxDashboard, RxHome } from 'react-icons/rx'
import { BsBoxSeam } from 'react-icons/bs'
import { FiShoppingBag } from 'react-icons/fi'





export const Options = [
    { state: false, name: "Home", link: "/", icon: RxHome },
    { state: false, name: "Dashboard", link: "/dashboard", icon: RxDashboard },
    { state: false, name: "User", link: "/user", icon: AiOutlineUser },
    { state: false, name: "Product", link: "/product", icon: BsBoxSeam },
    { state: false, name: "Sale", link: "/sales", icon: FiShoppingBag },
    { state: false, name: "Settings", link: "/settings", icon: AiOutlineSetting },
    { state: true, name: "Logout", link: "", icon: AiOutlineLogout },

]
