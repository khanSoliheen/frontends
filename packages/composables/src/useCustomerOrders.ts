import { ref, computed } from "vue";
import type { Ref, ComputedRef } from "vue";
import { useShopwareContext } from "#imports";
import type { Schemas } from "#shopware";

export type UseCustomerOrdersReturn = {
  /**
   * All placed orders belonging to the logged-in customer
   */
  orders: Ref<Schemas["Order"][]>;
  /**
   * Changes the current page of the orders list
   *
   * In order to change a page with additional parameters please use `loadOrders` method.
   */
  changeCurrentPage(
    pageNumber: number | string,
    limit: number | string,
  ): Promise<void>;
  /**
   * Fetches the orders list and assigns the result to the `orders` property
   */
  loadOrders(parameters?: Schemas["Criteria"]): Promise<void>;
  /**
   * Fetches the total orders list and assigns the result to the `totalOrderItemsCount` property
   */
  loadTotalOrdersCount(parameters?: Schemas["Criteria"]): Promise<void>;
  /**
   * Current page number
   */
  currentPage: ComputedRef<number>;
  /**
   * total pages
   */
  totalPages(limit: number): number;
};

/**
 * Composable for fetching the orders list.
 * @public
 * @category Customer & Account
 */
export function useCustomerOrders(): UseCustomerOrdersReturn {
  const { apiClient } = useShopwareContext();

  const orders: Ref<Schemas["Order"][]> = ref([]);

  const currentPaginationPage = ref<number>(1);

  const totalOrderItemsCount: Ref<number> = ref(0);

  const loadOrders = async (
    parameters: Schemas["Criteria"] = {},
  ): Promise<void> => {
    const fetchedOrders = await apiClient.invoke("readOrder post /order", {
      body: parameters,
    });
    orders.value = fetchedOrders.data.orders.elements;
  };

  const loadTotalOrdersCount = async (
    parameters: Schemas["Criteria"] = {},
  ): Promise<void> => {
    const fetchedOrders = await apiClient.invoke("readOrder post /order", {
      body: parameters,
    });
    totalOrderItemsCount.value = fetchedOrders.data.orders.total ?? 0;
  };

  const changeCurrentPage = async (
    pageNumber: number,
    currentLimit: number,
  ) => {
    await loadOrders({ page: pageNumber, limit: currentLimit });
    currentPaginationPage.value = pageNumber;
  };

  const currentPage = computed(() => currentPaginationPage.value);

  const totalPages = (limit: number) => {
    return Math.ceil(totalOrderItemsCount.value / limit);
  };

  return {
    orders,
    changeCurrentPage,
    loadOrders,
    loadTotalOrdersCount,
    currentPage,
    totalPages,
  };
}
