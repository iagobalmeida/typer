<template>
  <div class="progressWrapper bg-light bg-gradient">
    <div class="progress bg-primary bg-gradient" :style="`width:${progress}%`"></div>
  </div>
  <TypingBox :done="text.done" :pending="text.pending"/>
  <div class="mx-5 row counter">
    <div class="col card">
      <div class="card-body row shadow-sm" data-bs-toggle="collapse" data-bs-target="#collapse_info">
        <div class="col d-flex justify-content-center align-items-center flex-column">
          <h3 class="text-success mb-1">{{text.corrects}}</h3>
          <small class="text-muted">Acertos</small>
        </div>
        <div class="col d-flex justify-content-center align-items-center flex-column">
          <h3 class="text-danger mb-1">{{text.wrongs}}</h3>
          <small class="text-muted">Erros</small>
        </div>
        <div class="col d-flex justify-content-center align-items-center flex-column">
          <h3 class="text-primary mb-1">{{((text.corrects/(text.wrongs+text.corrects))*100).toFixed(2) || '-'}}<small>%</small></h3>
          <small class="text-muted">Precisão</small>
        </div>
      </div>
      <div class="card-body row shadow-sm mt-3 collapse" id="collapse_info" style="overflow-y: auto; max-height:300px;">
        <div class="col">
          <b>Acertos</b>
          <ul>
            <li v-for="correct, correct_index in metrics.corrects" :key="`correct_${correct_index}`">
              <b class="mr-1">{{correct_index}}</b>
              {{correct}}
            </li>
          </ul>
        </div>
        <div class="col">
          <b>Erros</b>
          <ul>
            <li v-for="wrong, wrong_index in metrics.wrongs" :key="`wrong_${wrong_index}`">
              <b class="mr-1">{{wrong_index}}</b>
              {{wrong}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TypingBox from './components/TypingBox.vue'
import { poems } from './assets/texts.json';


export default {
  name: 'App',
  components: {
    TypingBox
  },
  data: () => ({
    text: {
      done: [
        ''
      ],
      pending: poems[0],
      wrongs:   0,
      corrects: 0
    },
    metrics: {
      wrongs: {},
      corrects: {}
    },
    ignoreKeys: [
      'CapsLock', 'Shift', 'Control', 'Backspace'
    ]
  }),
  computed: {
    progress: function () {
      let pending = this.text.pending.reduce((acc, line) => (acc + line.length), 0);
      let done = this.text.done.reduce((acc, line) => (acc + line.length), 0);
      let total = pending + done;
      return (done*100/total).toFixed(0);
    }
  },
  created: function() {
    document.addEventListener('keydown', (event) => {
      let key = event.key;
      if(this.ignoreKeys.includes(key)) { return; }

      let currentDone = this.text.done.length - 1;
      let currentLine = this.text.pending[0];
      let correct = currentLine.length > 0 ? currentLine[0] : 'Enter';
      
      if(key == correct) {
        this.text.done[currentDone] += correct != 'Enter' ? correct : '';
        this.text.corrects += 1;
        this.text.pending[0] = currentLine.substring(1, currentLine.length);
        if(correct == 'Enter') {
          this.text.pending.shift();
          this.text.done.push('');
        }else{
          this.metrics.corrects[key.toUpperCase()] = this.metrics.corrects[key.toUpperCase()] ? this.metrics.corrects[key.toUpperCase()] + 1 : 1;
      
        }
      }else{
        if(key != 'Enter'){
          this.metrics.wrongs[key.toUpperCase()] = this.metrics.wrongs[key.toUpperCase()] ? this.metrics.wrongs[key.toUpperCase()] + 1 : 1;
        }
        this.text.wrongs += 1;
      }
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
