"use server";

import axios from "axios";

import { auth } from "~/lib/auth";
import { getApiUrl } from "./getApiUrl";

export const dashboard = async () => {
  const session = await auth();
  const apiUrl = await getApiUrl();
  try {
    const response = await axios.get(`${apiUrl}/api/v1/Dashboards`, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });
    return response.data;
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Product creation failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

export const dashboardSalesTrend = async () => {
  const session = await auth();
  const apiUrl = await getApiUrl();
  try {
    const response = await axios.get(`${apiUrl}/api/v1/sales-trend`, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });
    return response.data;
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Product creation failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
export const dashboardOverviewNavigationData = async () => {
  const session = await auth();
  const apiUrl = await getApiUrl();
  try {
    const response = await axios.get(
      `${apiUrl}/api/v1/overview-navigation-data`,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Product creation failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
export const dashboardExportSalesData = async () => {
  const session = await auth();
  const apiUrl = await getApiUrl();
  try {
    const response = await axios.get(`${apiUrl}/api/v1/export-sales-data`, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });
    return response.data;
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Product creation failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
