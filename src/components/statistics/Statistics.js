import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title.length > 0 && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.stat_list}>
        {stats.map(({label, percentage, id}) => (
      <li className={styles.item} key={id}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>
        ))}
    </ul>
  </section>
);

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ).isRequired,
};