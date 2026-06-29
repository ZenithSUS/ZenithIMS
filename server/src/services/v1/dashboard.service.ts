import { getItemDashboard } from "../../repositories/item.repository.js";
import { getTransactionDashboard } from "../../repositories/transaction.repository.js";

export const getDashboardDataServiceV1 = async () => {
  const [itemDashboard, transactionDashboard] = await Promise.all([
    getItemDashboard(),
    getTransactionDashboard(),
  ]);

  return {
    ...itemDashboard,
    ...transactionDashboard,
  };
};
