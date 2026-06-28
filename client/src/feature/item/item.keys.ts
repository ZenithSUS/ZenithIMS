const itemKeys = {
  all: ["items"] as const,
  paginated: (page: number) => [...itemKeys.all, "paged", page] as const,
  byId: (id: string) => [...itemKeys.all, "id", id] as const,
  delete: (id: string) => [...itemKeys.all, "delete", id] as const,
  update: (id: string) => [...itemKeys.all, "update", id] as const,
};

export default itemKeys;
