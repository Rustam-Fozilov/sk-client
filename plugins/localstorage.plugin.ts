export default defineNuxtPlugin(() => {
  return {
    provide: {
      getItem(key: string) {
        if (process.client) {
          return localStorage.getItem(key);
        } else {
          return undefined;
        }
      },

      setItem(key: string, value: any) {
        if (process.client) {
          return localStorage.setItem(key, value);
        } else {
          return undefined;
        }
      },

      removeItem(key: string) {
        if (process.client) {
          return localStorage.removeItem(key);
        } else {
          return undefined;
        }
      },
    }
  }
})
