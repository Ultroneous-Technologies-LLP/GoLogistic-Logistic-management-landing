import { notFound } from "next/navigation";

import { axiosInstance } from "@/utils/axios";

export async function fetchStrapiData<T>({ endPoint }: { endPoint: string }): Promise<T> {
  try {
    const response = await axiosInstance.get<{ data: T }>(`/api/${endPoint}?populate=*,pLevel=5`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    notFound();
  }
}
