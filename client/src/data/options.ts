import { AiOutlineMenu, AiOutlineHome, AiOutlineUser, AiOutlineSetting, AiOutlineLogout, AiOutlineShoppingCart } from 'react-icons/ai'
import { RxDashboard, RxHome } from 'react-icons/rx'
import { BsBoxSeam } from 'react-icons/bs'
import { FiShoppingBag } from 'react-icons/fi'





export const AllOptions = [
    
    { state: false, name: "Dashboard", link: "/dashboard", icon: RxDashboard },
    { state: false, name: "Sales", link: "/sales", icon: FiShoppingBag },
    { state: false, name: "Settings", link: "/settings", icon: AiOutlineSetting },
    { state: true, name: "Logout", link: "", icon: AiOutlineLogout },

]

export const UserOptions = [
    { state: false, name: "Home", link: "/", icon: RxHome },
    { state: false, name: "User", link: "/user", icon: AiOutlineUser },
    { state: false, name: "Product", link: "/product", icon: BsBoxSeam },
    { state: false, name: "Cart", link: "/cart", icon: AiOutlineShoppingCart },
    { state: false, name: "Settings", link: "/settings", icon: AiOutlineSetting },
    { state: true, name: "Logout", link: "", icon: AiOutlineLogout },

]
