import { motion } from "framer-motion";
import styles from "./Modal.module.css";

export default function Modal({ data, onClose }) {
    return (
        <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className={styles.modal}
                initial={{ opacity: 0, scale: 0.8, y: -30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -30 }}
                transition={{ duration: 0.3 }}
            >
                <h2>Details</h2>

                {Object.entries(data).map(([key, value]) => (
                    <p key={key}>
                        {key}: {value}
                    </p>
                ))}

                <motion.button
                    className={styles.btn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                >
                    Close
                </motion.button>
            </motion.div>
        </motion.div>
    );
}