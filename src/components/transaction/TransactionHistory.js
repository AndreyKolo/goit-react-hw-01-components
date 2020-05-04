import React from "react";
import styles from "./TransactionHistory.module.css";
import PropTypes from 'prop-types';

 export const TransactionHistory = ({items}) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.table_head}>
      <tr className={styles.table_head_tr}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className={styles.table_body}>
        {items.map(({id, type, amount, currency}) => (
          <tr key={id} className={styles.table_body_tr}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
  }),
  ).isRequired,
};
