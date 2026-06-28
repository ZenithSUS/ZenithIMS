export type ApiResponse = {
  success: boolean;
  message: string;
};

export type ApiResponseWithData<T> = ApiResponse & {
  data: T;
};

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type ApiResponseWithPagination<T, K extends string> = ApiResponse & {
  data: {
    [key in K]: T[];
  } & { pagination: Pagination };
};

export type ApiError = {
  response?: {
    data?: {
      success: boolean;
      message: string;
      errors?: {
        field: string;
        message: string;
      }[];
    };
    status: number;
  };
  code?: string;
  message?: string;
};
