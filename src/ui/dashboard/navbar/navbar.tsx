'use client'
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'
const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <span><MdSearch /></span>
          <input type='text' placeholder='search' className={styles.input}/>
        </div>
        <div className={styles.icons}>
          <span><MdOutlineChat size={20}/></span>
          <span><MdNotifications size={20}/></span>
          <span><MdPublic size={20}/></span>
        </div>
      </div>
    </div>
  )
}
export default Navbar