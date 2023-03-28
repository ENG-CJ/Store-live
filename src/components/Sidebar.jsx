import styles from "../css/sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar_nav}>
        <div className={styles.brand_title}>
        <i class="fa-solid fa-seedling"></i>
          <div>
            <h6>ARO-POS-SYSTEM</h6>
          </div>
        </div>
        <hr />

        <div className={styles.list_items}>
          <div className={styles.row}>
            <div className={styles.links}>
                <p>Super Admin</p>
              <div className={styles.link}>
                <i class="fa-solid fa-chart-line"></i>
                <span>Dashboard</span>
              </div>
              <div className={styles.link}>
                <i class="fa-solid fa-basket-shopping"></i> <span>Sales</span>
              </div>
              <div className={styles.link}>
                <i class="fa-solid fa-fire-flame-curved"></i>{" "}
                <span>Customers</span>
              </div>
              <div className={styles.link}>
              <i class="fa-solid fa-list-check"></i>                <span>Products</span>
              </div>
              <p>Master Reports</p>
              <div className={styles.link}>
              <i class="fa-regular fa-bookmark"></i>
                <span>Expense</span>
              </div>
              <div className={styles.link}>
              <i class="fa-regular fa-file"></i>
                <span>Revenue</span>
              </div>
              <div className={styles.link}>
              <i class="fa-solid fa-basket-shopping"></i>                <span>Sales</span>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
