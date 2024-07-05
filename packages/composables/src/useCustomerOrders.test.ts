import { describe, expect, it } from "vitest";
import { useCustomerOrders } from "./useCustomerOrders";
import { useSetup } from "./_test";

describe("useCustomerOrders", () => {
  it("changeLanguage", async () => {
    const { vm, injections } = useSetup(useCustomerOrders);
    injections.apiClient.invoke.mockResolvedValue({
      data: { orders: { elements: [] } },
    });
    vm.loadOrders();
    expect(injections.apiClient.invoke).toHaveBeenCalledWith(
      expect.stringContaining("readOrder"),
      expect.objectContaining({}),
    );
  });

  it("changeCurrentPage", async () => {
    const { vm, injections } = useSetup(useCustomerOrders);
    injections.apiClient.invoke.mockResolvedValue({
      data: { orders: { elements: [] } },
    });
    vm.changeCurrentPage(2, 3);
    expect(injections.apiClient.invoke).toHaveBeenCalledWith(
      expect.stringContaining("readOrder"),
      expect.objectContaining({
        body: {
          limit: 3,
          page: 2,
        },
      }),
    );
  });

  it("initialLoadTotalOrders", async () => {
    const { vm, injections } = useSetup(useCustomerOrders);
    injections.apiClient.invoke.mockResolvedValue({
      data: { orders: { total: 3 } },
    });
    await vm.loadTotalOrdersCount();
    vm.totalPages(1);
    expect(injections.apiClient.invoke).toHaveBeenCalledWith(
      expect.stringContaining("readOrder"),
      expect.objectContaining({}),
    );

    expect(vm.totalPages(1)).toBe(3);
  });

  it("totalPagesFallback", async () => {
    const { vm, injections } = useSetup(useCustomerOrders);
    injections.apiClient.invoke.mockResolvedValue({
      data: { orders: {} },
    });
    await vm.loadTotalOrdersCount();
    vm.totalPages(1);
    expect(injections.apiClient.invoke).toHaveBeenCalledWith(
      expect.stringContaining("readOrder"),
      expect.objectContaining({}),
    );

    expect(vm.totalPages(1)).toBe(0);
  });
});
