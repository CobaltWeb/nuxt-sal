import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import sal from "sal.js";

import "sal.js/dist/sal.css";

export default defineNuxtPlugin((nuxtApp) => {
  let salInstance: sal.API | null = null;

  nuxtApp.hook("app:suspense:resolve", () => {
    const config = useRuntimeConfig();
    salInstance = sal(config.public.sal || {});
  });

  return {
    provide: {
      salInstance: () => salInstance,
    },
  };
});
