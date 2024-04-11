import Image from 'next/image'
import Menulink from './menulink'
import styles from './sidebar.module.css'
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard, MdHelpCenter, MdLogout, MdOutlineSettings, MdPeople, MdShoppingBag, MdSupervisedUserCircle, MdWork
} from 'react-icons/md'

const menuItems = [
  {
    title: "Pages", 
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />
      },
    ]
  },
  {
    title: "Analytics", 
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />
      },
      {
        title: "Reports",
        path: "/dashboard/report",
        icon: <MdAnalytics />
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />
      },

    ]
  },
  {
    title: "Users", 
    list: [
      {
        title: "Settings",
        path: "/dashboard/setting",
        icon: <MdOutlineSettings />
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />
      },

    ]
  },
  
]
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/no-user.jpeg" alt="" width="50" height="50" />
        <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.usertitle}>Administrator</span>

        </div>
      </div>
      <ul>
      {
        menuItems.map(cat=>(
          <li key={cat.title}>
            <span>{cat.title}</span>
            {cat.list.map(item=>(
              <Menulink {...item} key={item.title} />
            ))}
          </li>
        ))
      }
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  )
}

export default Sidebar