import styles from "./ChartCard.module.css";

export default function ChartCard({ title, children }) {
    return (
        <div className={styles.chartCard}>

            <h3>{title}</h3>

            {children}

        </div>
    );
}
