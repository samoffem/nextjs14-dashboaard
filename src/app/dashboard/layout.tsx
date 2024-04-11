
import Sidebar from '@/ui/dashboard/sidebar/sidebar'
import Navbar from '@/ui/dashboard/navbar/navbar'
import styles from '@/ui/dashboard/dashboard.module.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
        <div className={styles.menu}><Sidebar /></div>
        <div className={styles.content}>
            <Navbar />
            <div>{children}</div>
        </div>
    </div>
  );
}
