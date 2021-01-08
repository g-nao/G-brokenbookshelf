Vue.createApp({
  data: function () {
    return {
      searchWord: 'placeholder',
    }
  },
  methods: {
    googleSearch: function () {
      if (!this.searchWord) { return }

      window.location.href = 'https://www.google.com/search?q=' + this.searchWord
    }
  }
}).mount('#app')