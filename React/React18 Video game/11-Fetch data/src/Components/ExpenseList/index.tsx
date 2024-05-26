interface ExpenseType {
  id: number;
  name: string;
  amount: number;
  category: string;
}
interface ExpenseListType {
  expenses: ExpenseType[];
  Delete: (id: number) => void;
}

const ExpenseList = ({ expenses, Delete }: ExpenseListType) => {
  return (
    <>
      {expenses.length == 0 ? (
        <h1>there is no items listed in your card</h1>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Description:</th>
              <th>Amount:</th>
              <th>Category:</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => {
              return (
                <tr key={expense.id}>
                  <td>{expense.name}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => Delete(expense.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Sum</td>
              <td>
                {expenses.reduce((acc, expense) => expense.amount + acc, 0)}
              </td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
};

export default ExpenseList;
