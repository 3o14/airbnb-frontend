import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode> StrictMode가 렌더링을 2번씩 하게 만듦 -> 소셜 로그인 시 api token 요청을 한 번만 해야하기 때문에 주석처리함
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  // </React.StrictMode>
);
