export default {
  install: (app) => {
    app.config.globalProperties.$filters = {
      currency(value) {
        return value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
      },

      ucfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
    }
  },
}
