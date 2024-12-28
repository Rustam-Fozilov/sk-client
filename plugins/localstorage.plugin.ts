export default defineNuxtPlugin(() => {
  return {
    provide: {
      getLocalItem(key: string) {
        if (process.client) {
          return localStorage.getItem(key);
        } else {
          return undefined;
        }
      },

      setLocalItem(key: string, value: any) {
        if (process.client) {
          return localStorage.setItem(key, value);
        } else {
          return undefined;
        }
      },

      removeLocalItem(key: string) {
        if (process.client) {
          return localStorage.removeItem(key);
        } else {
          return undefined;
        }
      },
    }
  }
})
