import { motion } from "framer-motion";
import styles from "./Table.module.css";

export default function Table({
    columns,
    data,
    onView,
    onEdit,
    onDelete,
    onApprove,
    onReject
}) {
    return (
        <motion.table
            className={styles.table}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => (
                    <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.1
                        }}
                    >
                        {Object.entries(item).map(([key, value], i) => (
                            <td key={i}>
                                {key === "status" ? (
                                    <span
                                        className={
                                            value === "Approved"
                                                ? styles.approved
                                                : value === "Rejected"
                                                    ? styles.rejected
                                                    : styles.pending
                                        }
                                    >
                                        {value}
                                    </span>
                                ) : (
                                    value
                                )}
                            </td>
                        ))}

                        <td>
                            {onView && (
                                <motion.button
                                    className={styles.btn}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => onView(item)}
                                >
                                    View
                                </motion.button>
                            )}

                            {onEdit && (
                                <motion.button
                                    className={styles.btnss}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => onEdit(item)}
                                >
                                    Edit
                                </motion.button>
                            )}

                            {onDelete && (
                                <motion.button
                                    className={styles.btns}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => onDelete(item)}
                                >
                                    Delete
                                </motion.button>
                            )}

                            {onApprove && (
                                <motion.button
                                    className={styles.btn}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => onApprove(item)}
                                >
                                    Approve
                                </motion.button>
                            )}

                            {onReject && (
                                <motion.button
                                    className={styles.btn}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => onReject(item)}
                                >
                                    Reject
                                </motion.button>
                            )}
                        </td>
                    </motion.tr>
                ))}
            </tbody>
        </motion.table>
    );
}