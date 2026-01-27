export interface CommonApiResponse<T> {
  data: T;
  message: string;
  status: string;
}
