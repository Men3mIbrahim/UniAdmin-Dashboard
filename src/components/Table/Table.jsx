import styles from "./Table.module.css";
export default function Table({ columns, data, onView, onApprove, onReject }) {

    return (
        <table className={styles.table}>

            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>


            <tbody>

                {data.map((item, index) => (
                    <tr key={index}>

                        {Object.entries(item).map(([key, value], i) => (
                            <td key={i}>
                                {key === "status" ? (
                                    <span className={
                                        value === "Approved"
                                            ? styles.approved
                                            : value === "Rejected"
                                                ? styles.rejected
                                                : styles.pending
                                    }>
                                        {value}
                                    </span>
                                ) : (
                                    value
                                )}
                            </td>
                        ))}

                        <td>
                            {onView && (
                                <button className={styles.btn} onClick={() => onView(item)}>
                                    View
                                </button>
                            )}

                            {onApprove && (
                                <button className={styles.btn}  onClick={() => onApprove(item)}>
                                    Approve
                                </button>
                            )}

                            {onReject && (
                                <button className={styles.btn}  onClick={() => onReject(item)}>
                                    Reject
                                </button>
                            )}
                        </td>

                    </tr>
                ))}

            </tbody>

        </table>
    );
}