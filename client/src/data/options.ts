import { AiOutlineMenu, AiOutlineHome, AiOutlineUser, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai'
import { RxDashboard } from 'react-icons/rx'
import { BsBoxSeam } from 'react-icons/bs'
import { FiShoppingBag } from 'react-icons/fi'




export const Options = [
    { state: false, name: "Dashboard", link: "/", icon: RxDashboard },
    { state: false, name: "User", link: "/user", icon: AiOutlineUser },
    { state: false, name: "Product", link: "/product", icon: BsBoxSeam },
    { state: false, name: "Sale", link: "/sale", icon: FiShoppingBag },
    { state: false, name: "Settings", link: "/settings", icon: AiOutlineSetting },
    { state: true, name: "Logout", link: "", icon: AiOutlineLogout },

]
