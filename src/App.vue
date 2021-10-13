<template>

  <div class="progressWrapper bg-light bg-gradient text-primary d-flex justify-content-start align-items-center">
    <div class="progress bg-primary bg-gradient" :style="`width:${progress}%`"></div>
    <span class="bg-white d-flex justify-content-center align-items-center w-10">{{`${doneTotal} / ${(pendingTotal+doneTotal)}`}}</span>
  </div>
  <input type="text" ref="hiddenInput" onkeydown="this.value=''">

  <TypingBox :done="text.done" :pending="text.pending" v-if="status=='SOLVING'"/>
  <div class="mx-5 row g-3" v-else>
    <div class="col" v-for="poem, poemIndex in poems" :key="`poem_${poemIndex}`">
      <div class="card-body shadow">
        <small class="text-muted">
          <i class="fas fa-book"></i> Poema, {{poem.reduce((acc,line)=>(acc+line.length),0)}} letras
        </small>
        <h5 class="text-primary text-justify">{{poem.reduce((acc, line)=>(acc+(acc.length?'. ':'')+line),'').substring(0,160)}}...</h5>
        <button class="btn btn-light w-100" v-on:click="startText(poemIndex)">
          <i class="fas fa-feather-alt me-2"></i> Escrever
        </button>
      </div>
    </div>
  </div>


  <div class="mx-5 row counter">
    <div class="col card shadow">
      <div class="card-body row -sm mb-2" data-bs-toggle="collapse" data-bs-target="#collapse_info">
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

      <div class="row collapse show" id="collapse_info" style="overflow-y: auto; max-height:300px;">
        <div class="col my-2">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="checkAutoEnter" v-model="autoEnter">
            <label class="form-check-label" for="checkAutoEnter">Enter automático</label>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="checkAutoCaps" v-model="autoCaps">
            <label class="form-check-label" for="checkAutoCaps">Capslock automático</label>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="checkAutoAccent" v-model="autoAccent">
            <label class="form-check-label" for="checkAutoAccent">Pontuação automática</label>
          </div>
        </div>
        <table class="d-none table table-sm table-striped table-light table-bordered">
          <thead>
            <tr>
              <th>Letra</th>
              <th>Acertos</th>
              <th>Erros</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="metric, metricIndex in metrics" :key="`metric_${metricIndex}`">
              <td>{{metricIndex}}</td>
              <td>{{metric.correct}}</td>
              <td>{{metric.wrong}}</td>
            </tr>
          </tbody>
        </table>
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
    poems,
    status:     'IDLE',
    autoAccent: false,
    autoCaps:  false,
    autoEnter:  false,
    text: {
        done:         [''],
        doneChars:    0,
        pending:      [''],
        pendingChars: 0,
        wrongs:       0,
        corrects:     0
    },
    metrics: {},
    ignoreKeys: [ 'CapsLock', 'Shift', 'Control', 'Backspace' ]
  }),
  computed: {
    pendingTotal: function () {
      return this.text.pending.reduce((acc, line) => (acc + line.length), 0);
    },
    doneTotal: function () {
      return this.text.done.reduce((acc, line) => (acc + line.length), 0);
    },
    progress: function () {
      let pending = this.pendingTotal;
      let done    = this.doneTotal;
      let total   = pending + done;
      return (done*90/total).toFixed(0);
    }
  },
  methods: {
    startText(textId) {
      this.text.pending = Object.assign([], this.poems[textId]);
      this.status = 'SOLVING';
    },
    stopText() {
      this.status = 'IDLE';
      this.text.done = [''];
      this.text.doneChars = 0;
      this.text.pending = [''];
      this.text.pendingChars = [''];
    },
    updateMetrics(key, correct) {
      if(this.metrics[key.toUpperCase()]) {
        this.metrics[key.toUpperCase()][key == correct ? 'correct' : 'wrong'] += 1;
      }else{
        this.metrics[key.toUpperCase()] = {
          correct: key == correct ? 1 : 0,
          wrong:   key != correct ? 1 : 0,
        }
      }
    }
  },
  created: function() {
    document.addEventListener('click', () => {
      this.$refs.hiddenInput.focus();
    });

    document.addEventListener('keydown', (event) => {
      let key = event.key;
      if(key == 'Escape') { this.stopText(); }
    });
    
    document.addEventListener('keypress', (event) => {
      let key = event.key;
      if(this.ignoreKeys.includes(key) || this.status != 'SOLVING') { return; }

      let currentLine = this.text.pending[0];
      if((this.text.pending.length == 1 && currentLine.length == 0)) { return this.stopText(); }

      let correct = currentLine.length > 0 ? currentLine[0] : 'Enter';

      this.updateMetrics(key, correct);

      if(this.autoCaps){
        key = key.toUpperCase();
        correct = correct.toUpperCase();
      }

      if(this.autoAccent) {
        key = key.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        correct = correct.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      }
      
      if(key == correct) {
        this.text.done[this.text.done.length - 1] += (correct != 'Enter' ? correct : '');
        this.text.corrects += 1;
        this.text.pending[0] = currentLine.substring(1, currentLine.length);
        if(correct == 'Enter') {
          this.text.pending.shift();
          this.text.done.push('');
        }
        if(this.autoEnter) {
          let nextLine = this.text.pending[0];
          let nextCorrect = nextLine.length > 0 ? nextLine[0] : 'Enter';
          while(nextCorrect == 'Enter'){
            this.text.corrects += 1;
            this.text.pending[0] = nextLine.substring(1, nextLine.length);
            this.text.pending.shift();
            this.text.done.push('');
            nextLine = this.text.pending[0];
            console.log(nextLine);
            console.log(Object.keys(this.text.pending).length);
            if(!nextLine && Object.keys(this.text.pending).length == 0) { return this.stopText(); }
            nextCorrect = nextLine.length > 0 ? nextLine[0] : 'Enter';
          }
        }
      }else{
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
