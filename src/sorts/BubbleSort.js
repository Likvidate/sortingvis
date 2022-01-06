import Vue from "vue"

export default new Vue({
  methods: {
    run(arr) {
      arr = [...arr]
      var isSorted = false
      var index = arr.length - 1;
      var counter = 0
      while (!isSorted) {
        isSorted = true
        for (var i = 0; i < index; i++) {
          isSorted = false
          if (arr[i] > arr[i + 1]) {
            counter++

            var tmp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = tmp
            this.$emit('onItemSwap', {
              arr: [...arr],
              left: i,
              right: i + 1,
              counter
            })
          }
        }
        index--
      }
    }
  }
})