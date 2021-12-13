<template>
  <div class="mainView">
    <div class="buttonRow">
      <button class="btn" :disabled="isSorting" @click="Reset">Reset</button>
      <button class="btn" :disabled="isSorting || isSorted" @click="Bubble">Bubble Sort</button>
    </div>
    <div class="bars">
      <div class="bar" v-for="(el, index) in array" :style="{height: `${el * 0.7}px`}" :id = "'bar-${index}'" :key="index"></div>
    </div>
  </div>
</template>

<script>
import BubbleSort from "../sorts/BubbleSort"
export default {
  name: 'Sorting',
  props: {
    msg: String
  },
  data: function() {
    return {
      isSorting: false,
      array: [],
      isSorted: false
    }
  },
  methods: {
    Reset () {
      const tempArray = []
      for (var i = 0; i < 70; i++) {
        tempArray.push(this.RandomInt(5, 1000))
      }
      this.array = [...tempArray]
      this.isSorted = false
      console.log(this.array)
    },
    RandomInt (max, min) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    Bubble () {
      this.isSorting = true
      var counter = 0
      var time = 0

      BubbleSort.$on('onItemSwap', (data) => {
        counter++
        time += 5
        setTimeout(() => {
          this.resetBackgroundColors()
        }, time);
        this.array = [...data.arr];
        if (data.counter === counter) {
          this.isSorting = false
          this.isSorted = true
        }
      }, time);
      BubbleSort.run(this.array)
    }
  }
}
</script>

<style>
.mainView {
  width: 1200px;
  margin: 0 auto;
}
/* Button style */
.mainView .buttonRow .btn {
    outline: none;
    background: none;
    border: 1px solid #cecece;
    padding: 10px 20px;
    margin-right: 10px;
}
.mainView .buttonRow .btn:hover {
  cursor: pointer;
  color: white;
  border: 1px solid aqua;
  background-color: aqua;
}
.mainView .buttonRow .btn:disabled {
  background-color: #ebebeb;
}
.mainView .buttonRow .btn:disabled:hover {
  color: rgb(128, 128, 128);
  border: 1px solid #cecece;
  cursor: not-allowed;
}
/* Bar style */
.mainView .bars {
  margin: auto;
  margin-top: 60px;
  border-bottom: 1px solid #cecece;
  text-align: center;
}
.mainView .bars .bar {
  margin-right: 4px;
  font-size: 0;
  width: 13px;
  height: 2px;
  display: inline-block;
  background-color: aqua;
}
.mainView .bars .bar:hover {
  background-color: blue;
}
</style>
