import React, { FunctionComponent, useMemo } from "react";
import { ZodSchema, z } from "zod";
import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";

// helps
import { getApiUrl } from "./ApiProvider.helps";

// constants
import { TOKEN_NAME } from "./ApiProvider.constants";

type ApiContext = {
  api: <T>(
    url: string,
    config?: AxiosRequestConfig | null,
    schema?: ZodSchema<T>
  ) => Promise<T | null>;
};

type ApiProviderProps = {
  children: JSX.Element;
};

export const apiContext = React.createContext({} as ApiContext);

export const ApiProvider: FunctionComponent<ApiProviderProps> = (props) => {
  const { children } = props;
  const urlApi = `${getApiUrl()}/api`;

  async function api<T>(
    url: string,
    config: AxiosRequestConfig | null = { method: "GET" },
    schema: ZodSchema<T> = z.any()
  ): Promise<T | null> {
    const platform = "web";
    const verifyToken = localStorage.getItem(TOKEN_NAME);
    const queryParams = qs.stringify(
      { platform },
      {
        addQueryPrefix: !url.includes("?"),
      }
    );
    const currentUrl = url.includes("http")
      ? url
      : `${urlApi}${url}${url.includes("?") ? `&${queryParams}` : queryParams}`;
    const currentConfig = config ? config : {};

    try {
      const response = await axios(currentUrl, {
        headers: {
          "Content-Type": "application/json",
          ...(verifyToken !== null && { authorization: verifyToken }),
        },
        ...currentConfig,
      });

      const isCurrent = schema.safeParse(response.data);
      if (isCurrent.success) return isCurrent.data;

      return null;
    } catch (error: any) {
      if (error.response !== null && error.response !== undefined) {
        console.error(error.response.data);
      } else {
        console.error(error.message);
      }
      return null;
    }
  }

  const contextValue = useMemo(() => ({ api }), []);

  return (
    <apiContext.Provider value={contextValue}>{children}</apiContext.Provider>
  );
};
