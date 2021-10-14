<template>


  <div class="bg-primary bg-gradient text-light"
    :style="`transition: all 500ms ease-in-out; overflow:hidden; height:0px; padding-top:${status=='SOLVED'?'3rem':'0rem'}; padding-bottom:${status=='SOLVED'?'15rem':'0rem'}  `">
    <h2 class="fw-bold">Peoma concluído!</h2>
    <h6>Você digitou um total de <b>{{text.corrects + text.wrongs}} caracteres!</b></h6>
    <h6>Dos quais, foram <b>{{text.corrects}} corretos</b> e <b>{{text.wrongs}} incorretos!</b></h6>
    <h6>No total, você levou <b>{{timeSpentTreated}}</b> segundos para digitar!</h6>
    <button class="btn btn-outline-light mt-5" v-on:click="stopText">
      <i class="fa fa-arrow-left me-2"></i> Voltar ao menu inicial
    </button>
  </div>
  <div class=" bg-light  text-primary d-flex justify-content-start align-items-stretch mb-5" v-if="status=='SOLVING' || status=='SOLVED'">
    <div class=" bg-primary" :style="`width:${progress}%`"></div>
    <span class="bg-white d-flex justify-content-center align-items-center w-10">{{`${doneTotal} / ${(pendingTotal+doneTotal)}`}}</span>
  </div>

  <div class="mx-5 row g-3 mt-5 mb-3 " v-else>
    <div class="col-12">
      <input class="form-control border shadow" type="text" v-model="search" placeholder="Pesquisar...">
    </div>
  </div>

  <TypingBox :capslock="text.capsLock" :done="text.done" :pending="text.pending" v-if="status=='SOLVING' || status=='SOLVED'" class="mt-5"/>
  
  
  <div class="mx-5 row g-3 mb-5" v-else data-masonry='{"percentPosition": true }'>
    <div class="col-sm-6 col-lg-4" v-for="poem, poemIndex in filteredPoems" :key="`poem_${poemIndex}`">
      <div class="card-body shadow border">
        <small class="text-muted">
          <i class="fas fa-feather-alt"></i> {{poem.author}}, {{poem.text.reduce((acc,line)=>(acc+line.length),0)}} letras
        </small>
        <h5 class="text-primary text-justify">{{poem.text.reduce((acc, line)=>(acc+(acc.length?'. ':'')+line),'').substring(0,160)}}...</h5>
        <button class="btn btn-outline-primary w-100" v-on:click="startText(poemIndex)">
          <i class="fas fa-book me-2"></i> Escrever
        </button>
      </div>
    </div>
  </div>

  <br>
  <small class="text-muted mt-5 text-justify" v-if="status == 'SOLVING'">{{timeSpentTreated}}</small>


  <div class="mx-5 row counter">
    <div class="col card shadow">
      <div class="card-body row -sm mb-2" data-bs-toggle="collapse" data-bs-target="#collapse_info">
        <div class="col d-flex justify-content-center align-items-center flex-column">
          <h3 class="text-muted mb-1">Configurações</h3>
          <small class="text-muted">Clique para abrir/fechar</small>
        </div>
        <!-- <div class="col d-flex justify-content-center align-items-center flex-column">
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
        </div> -->
      </div>

      <div class="row collapse" id="collapse_info" style="overflow-y: auto; max-height:300px;">
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
    search:     '',
    text: {
        timeInt:      null,
        timeSpent:    null,
        done:         [''],
        doneChars:    0,
        pending:      [''],
        pendingChars: 0,
        wrongs:       0,
        corrects:     0,
        capsLock:     false
    },
    metrics: {},
    ignoreKeys: [ 'CapsLock', 'Shift', 'Control', 'Backspace' ]
  }),
  computed: {
    filteredPoems: function () {
      return this.poems.filter((poem) => (poem.text.reduce((acc,text) => (acc+text.toLowerCase()), '').indexOf(this.search.toLowerCase()) >= 0));
    },
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
    },
    timeSpentTreated: function() {
      let seconds = Math.floor(this.text.timeSpent/1000);
      let miliseconds = ((this.text.timeSpent-(seconds*1000))/10).toFixed(0);
      return ((seconds < 10) ? '0' : '')+seconds + ':' + (miliseconds < 10 ? '0':'')+miliseconds;
    }
  },
  methods: {
    startText(textId) {
      let poem = this.filteredPoems[textId].text;
      this.text.pending = Object.assign([], poem);
      this.status = 'SOLVING';
    },
    stopText() {
      this.status = 'IDLE';
      this.text.done = [''];
      this.text.doneChars = 0;
      this.text.pending = [''];
      this.text.pendingChars = 0;
      this.text.corrects = 0;
      this.text.wrongs = 0;
    },
    stopTimer() {
      clearInterval(this.timeInt);
      this.timeInt = null;
    },
    startTimer() {
      let start = performance.now();
      this.timeInt = setInterval(() => {
        let now = performance.now();
        this.text.timeSpent = now - start;
        if(this.status != 'SOLVING') { this.stopTimer(); }
      }, 100);
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
    document.addEventListener('keydown', (event) => {
      let key = event.key;
      console.log(key);
      if(key == 'Escape') { this.stopText(); }
      if(key == 'CapsLock') { this.text.capsLock = !this.text.capsLock }
    });
    
    document.addEventListener('keypress', (event) => {
      // Getting input key - return if is in ignore list
      let key = event.key;
      if(this.ignoreKeys.includes(key) || this.status != 'SOLVING') { return; }


      // Getting current line, if is empty the text is over
      let currentLine = this.text.pending[0];
      if((this.text.pending.length == 1 && currentLine.length == 0)) { return this.status = 'SOLVED'; }

      // Getting current letter, if is none is a breakline (Enter)
      let correct = currentLine.length > 0 ? currentLine[0] : 'Enter';

      console.log(correct);
      console.log(key);

      // If autoCaps is enabled, set both key and correct to uperCase
      if(this.autoCaps){
        key = key.toUpperCase();
        correct = correct.toUpperCase();
      }

      // If autoAccent is enabled, remove accets from key and correct
      if(this.autoAccent) {
        key = key.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        correct = correct.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      }

      // Update metrics
      this.updateMetrics(key, correct);
      
      if(key == correct) {
        this.text.done[this.text.done.length - 1] += (correct != 'Enter' ? correct : '');
        this.text.corrects += 1;
        this.text.pending[0] = currentLine.substring(1, currentLine.length);
        if(correct == 'Enter') {
          this.text.pending.shift();
          this.text.done.push('');
        }
        if(this.text.done[0].length == 1) {
          this.startTimer();
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
            if(!nextLine && Object.keys(this.text.pending).length == 0) { return this.status = "SOLVED"; }
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 200px;
}
</style>
