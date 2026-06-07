import type { ParamsDictionary } from "express-serve-static-core";

export type IdParams = ParamsDictionary & { id: string };

export type IPaginatedResponse<T> = {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};
