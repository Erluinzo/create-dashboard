import type { Config } from "@react-router/dev/config";

export default {
  //spa mode: the token lives in a browser cookie, so everything runs on the client
  ssr: false,
} satisfies Config;
