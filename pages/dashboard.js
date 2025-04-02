import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard | MIDRA</title>
        <meta name="description" content="MIDRA dashboard for procurement management" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <div className={styles.dashboard}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <Link href="/" className={styles.logo}>MIDRA</Link>
          </div>
          <nav className={styles.sidebarNav}>
            <ul className={styles.sidebarMenu}>
              <li className={activeTab === 'overview' ? styles.active : ''}>
                <a onClick={() => setActiveTab('overview')}>
                  <i className="fas fa-home"></i>
                  <span>Overview</span>
                </a>
              </li>
              <li className={activeTab === 'orders' ? styles.active : ''}>
                <a onClick={() => setActiveTab('orders')}>
                  <i className="fas fa-shopping-cart"></i>
                  <span>Orders</span>
                </a>
              </li>
              <li className={activeTab === 'suppliers' ? styles.active : ''}>
                <a onClick={() => setActiveTab('suppliers')}>
                  <i className="fas fa-users"></i>
                  <span>Suppliers</span>
                </a>
              </li>
              <li className={activeTab === 'inventory' ? styles.active : ''}>
                <a onClick={() => setActiveTab('inventory')}>
                  <i className="fas fa-boxes"></i>
                  <span>Inventory</span>
                </a>
              </li>
              <li className={activeTab === 'analytics' ? styles.active : ''}>
                <a onClick={() => setActiveTab('analytics')}>
                  <i className="fas fa-chart-line"></i>
                  <span>Analytics</span>
                </a>
              </li>
              <li className={activeTab === 'settings' ? styles.active : ''}>
                <a onClick={() => setActiveTab('settings')}>
                  <i className="fas fa-cog"></i>
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.sidebarFooter}>
            <div className={styles.userInfo}>
              <div className={styles.userAvatar}>
                <img src="https://via.placeholder.com/40" alt="User Avatar" />
              </div>
              <div className={styles.userDetails}>
                <p className={styles.userName}>Ahmed Al-Saud</p>
                <p className={styles.userRole}>Procurement Manager</p>
              </div>
            </div>
            <a href="#" className={styles.logoutBtn}>
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </a>
          </div>
        </aside>

        <main className={styles.content}>
          <header className={styles.contentHeader}>
            <div className={styles.pageTitle}>
              <h1>Dashboard</h1>
              <p>Welcome back, Ahmed! Here's what's happening with your procurement today.</p>
            </div>
            <div className={styles.headerActions}>
              <div className={styles.searchBar}>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search..." />
              </div>
              <div className={styles.notifications}>
                <i className="fas fa-bell"></i>
                <span className={styles.badge}>3</span>
              </div>
            </div>
          </header>

          <div className={styles.dashboardContent}>
            {activeTab === 'overview' && (
              <div className={styles.overviewTab}>
                <div className={styles.statsGrid}>
                  <div className={styles.statCard}>
                    <div className={styles.statIcon}>
                      <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className={styles.statInfo}>
                      <h3>Active Orders</h3>
                      <p className={styles.statValue}>24</p>
                      <p className={styles.statChange}>
                        <i className="fas fa-arrow-up"></i> 12% from last month
                      </p>
                    </div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statIcon}>
                      <i className="fas fa-money-bill-wave"></i>
                    </div>
                    <div className={styles.statInfo}>
                      <h3>Total Spend</h3>
                      <p className={styles.statValue}>SAR 145,320</p>
                      <p className={styles.statChange}>
                        <i className="fas fa-arrow-down"></i> 5% from last month
                      </p>
                    </div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statIcon}>
                      <i className="fas fa-users"></i>
                    </div>
                    <div className={styles.statInfo}>
                      <h3>Active Suppliers</h3>
                      <p className={styles.statValue}>18</p>
                      <p className={styles.statChange}>
                        <i className="fas fa-arrow-up"></i> 3 new this month
                      </p>
                    </div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statIcon}>
                      <i className="fas fa-piggy-bank"></i>
                    </div>
                    <div className={styles.statInfo}>
                      <h3>Cost Savings</h3>
                      <p className={styles.statValue}>SAR 32,450</p>
                      <p className={styles.statChange}>
                        <i className="fas fa-arrow-up"></i> 18% from last month
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.aiRecommendations}>
                  <div className={styles.sectionHeader}>
                    <h2>AI Recommendations</h2>
                    <a href="#" className={styles.viewAllLink}>View All</a>
                  </div>
                  <div className={styles.recommendationsGrid}>
                    <div className={styles.recommendationCard}>
                      <div className={styles.recommendationIcon}>
                        <i className="fas fa-lightbulb"></i>
                      </div>
                      <div className={styles.recommendationContent}>
                        <h3>Order Consolidation Opportunity</h3>
                        <p>Combine your office supplies order with 3 other SMEs to save 22% on total cost.</p>
                        <div className={styles.recommendationActions}>
                          <button className={styles.btnPrimary}>Take Action</button>
                          <button className={styles.btnText}>Dismiss</button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.recommendationCard}>
                      <div className={styles.recommendationIcon}>
                        <i className="fas fa-exclamation-triangle"></i>
                      </div>
                      <div className={styles.recommendationContent}>
                        <h3>Low Inventory Alert</h3>
                        <p>Printer paper stock is running low. Recommended reorder: 10 boxes.</p>
                        <div className={styles.recommendationActions}>
                          <button className={styles.btnPrimary}>Reorder Now</button>
                          <button className={styles.btnText}>Dismiss</button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.recommendationCard}>
                      <div className={styles.recommendationIcon}>
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <div className={styles.recommendationContent}>
                        <h3>Price Trend Alert</h3>
                        <p>Electronics prices are predicted to increase by 15% next month. Consider stocking up now.</p>
                        <div className={styles.recommendationActions}>
                          <button className={styles.btnPrimary}>View Products</button>
                          <button className={styles.btnText}>Dismiss</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.recentOrders}>
                  <div className={styles.sectionHeader}>
                    <h2>Recent Orders</h2>
                    <Link href="/orders" className={styles.viewAllLink}>View All</Link>
                  </div>
                  <div className={styles.tableContainer}>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Supplier</th>
                          <th>Items</th>
                          <th>Total</th>
                          <th>Status</th>
                          <th>Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#ORD-2025-1042</td>
                          <td>Al-Nahdi Medical</td>
                          <td>12 items</td>
                          <td>SAR 4,250</td>
                          <td><span className={styles.statusPending}>Pending</span></td>
                          <td>Apr 1, 2025</td>
                          <td>
                            <div className={styles.tableActions}>
                              <button className={styles.actionBtn}><i className="fas fa-eye"></i></button>
                              <button className={styles.actionBtn}><i className="fas fa-edit"></i></button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#ORD-2025-1041</td>
                          <td>Saudi Office Supplies</td>
                          <td>8 items</td>
                          <td>SAR 1,850</td>
                          <td><span className={styles.statusApproved}>Approved</span></td>
                          <td>Mar 29, 2025</td>
                          <td>
                            <div className={styles.tableActions}>
                              <button className={styles.actionBtn}><i className="fas fa-eye"></i></button>
                              <button className={styles.actionBtn}><i className="fas fa-edit"></i></button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#ORD-2025-1040</td>
                          <td>Riyadh Electronics</td>
                          <td>3 items</td>
                          <td>SAR 12,750</td>
                          <td><span className={styles.statusShipped}>Shipped</span></td>
                          <td>Mar 27, 2025</td>
                          <td>
                            <div className={styles.tableActions}>
                              <button className={styles.actionBtn}><i className="fas fa-eye"></i></button>
                              <button className={styles.actionBtn}><i className="fas fa-truck"></i></button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#ORD-2025-1039</td>
                          <td>Jarir Bookstore</td>
                          <td>15 items</td>
                          <td>SAR 3,450</td>
                          <td><span className={styles.statusDelivered}>Delivered</span></td>
                          <td>Mar 25, 2025</td>
                          <td>
                            <div className={styles.tableActions}>
                              <button className={styles.actionBtn}><i className="fas fa-eye"></i></button>
                              <button className={styles.actionBtn}><i className="fas fa-file-invoice"></i></button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
