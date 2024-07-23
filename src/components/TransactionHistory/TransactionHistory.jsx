import css from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.box}>
      <thead className={css.container}>
        <tr className={css.list}>
          <th className={css.item}>Type</th>
          <th className={css.item}>Amount</th>
          <th className={css.item}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.field}>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={css.el}>{item.type}</td>
            <td className={css.el}>{item.amount}</td>
            <td className={css.el}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
