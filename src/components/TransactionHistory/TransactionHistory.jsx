import React from 'react'
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
  return (
    <table className={styles.table}>
  <thead>
    <tr className={styles.line}>
      <th className={styles.title}>Type</th>
      <th className={styles.title}>Amount</th>
      <th className={styles.title}>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map(item => {
    return (
         <tr className={styles.line} key={item.id}>
            <td className={styles.cell}>{item.type}</td>
            <td className={styles.cell}>{item.amount}</td>
            <td className={styles.cell}>{item.currency}</td>
        </tr>
    )})}
  </tbody>
</table>
  )
}

export default TransactionHistory