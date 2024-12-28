export default defineNuxtPlugin(() => {
  return {
    provide: {
      getSessionItem(key: string) {
        if (process.client) {
          return sessionStorage.getItem(key);
        } else {
          return undefined;
        }
      },

      setSessionItem(key: string, value: any) {
        if (process.client) {
          return sessionStorage.setItem(key, value);
        } else {
          return undefined;
        }
      },

      removeSessionItem(key: string) {
        if (process.client) {
          return sessionStorage.removeItem(key);
        } else {
          return undefined;
        }
      },
    }
  }
})
