import React from "react";
import styles from "./Card.module.css";
import { motion } from "framer-motion";

export default function Cards({ title, value, icon: Icon, index }) {
  return (
    <motion.div
      className={styles.cards}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15
      }}
    >
      <div className={styles.icon}>
        <Icon />
      </div>

      <div>
        <h2>{title}</h2>
        <p>{value}</p>
      </div>
    </motion.div>
  );
}