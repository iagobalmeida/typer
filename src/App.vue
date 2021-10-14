<template>


  <div class="bg-primary bg-gradient text-light d-flex justify-content-center align-items-center flex-column"
    :style="`transition: all 500ms ease-in-out; overflow:hidden; max-height:${status=='WRITTEN' ? '300px;' : '0px;'}; padding:${status=='WRITTEN' ? '5rem;' : '0rem;'}`">
    
    <h2 class="fw-bold">
      {{ progress >= 90 ? 'Poema concluído!' : `Você completou ${((progress/90)*100).toFixed()}% do poema!`}}
    </h2>
    <h6>Você digitou um total de <b>{{text.corrects + text.wrongs}} caracteres!</b></h6>
    <h6>Dos quais, foram <b>{{text.corrects}} corretos</b> e <b>{{text.wrongs}} incorretos!</b></h6>
    <h6>No total, você levou <b>{{timeSpentTreated}} segundos</b> para digitar!</h6>


    
    <button class="btn btn-outline-light mt-3" v-on:click="stopWriting">
      <i class="fa fa-arrow-left me-2"></i> Voltar ao menu inicial
    </button>
  </div>

  <div :class="`bg-light text-primary d-flex justify-content-start align-items-stretch mb-5 ${status!='IDLE'?'o-100':'o-0'}`">
    <div class=" bg-primary" :style="`transition: width 125ms ease-in-out; width:${progress}%;`"></div>
    <span class="bg-white d-flex justify-content-center align-items-center w-10">{{`${doneTotal} / ${(pendingTotal+doneTotal)}`}}</span>
  </div>

  <TypingBox :lastWrong="text.lastWrong" :done="text.done" :pending="text.pending" v-if="status=='WRITTING' || status=='WRITTEN'" class="mt-5" ref="typingBox"/>
  
  <div class="text-muted my-5 text-justify d-flex justify-content-center align-items-center flex-column" v-if="status == 'WRITTING'">
    <small>{{timeSpentTreated}}</small>
    <small><i>Pressione <b>ESC</b> para voltar</i></small>
  </div>
  
  <div class="mx-5 row g-3 mb-5" v-if="status=='IDLE'">
    <div class="col-12">
      <input class="form-control border shadow" type="text" v-model="search" placeholder="Pesquisar...">
    </div>
    <div class="col-sm-6 col-lg-4" v-for="poem, poemIndex in filteredPoems" :key="`poem_${poemIndex}`">
      <div class="card-body shadow border">
        <small class="text-muted">
          <i class="fas fa-feather-alt"></i> {{poem.author}}, {{poem.text.reduce((acc,line)=>(acc+line.length),0)}} letras
        </small>
        <h5 class="text-primary text-justify">{{poem.text.reduce((acc, line)=>(acc+(acc.length?'. ':'')+line),'').substring(0,160)}}...</h5>
        <button class="btn btn-outline-primary w-100" v-on:click="startWriting(poemIndex)">
          <i class="fas fa-book me-2"></i> Escrever
        </button>
      </div>
    </div>
  </div>



  <div class="mx-5 row counter">
    <div class="col card shadow">
      <div class="card-body row -sm mb-2" data-bs-toggle="collapse" data-bs-target="#collapse_info">
        <div class="col d-flex justify-content-center align-items-center flex-column">
          <h3 class="text-muted mb-1">Configurações</h3>
          <small class="text-muted">Clique para abrir/fechar</small>
        </div>
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
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="checkBackSpace" v-model="autoBackSpace">
            <label class="form-check-label" for="checkBackSpace">Ignorar erros</label>
          </div>
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
    TypingBox,
  },
  data: () => ({
    poems,
    status:     'IDLE',
    autoAccent: false,
    autoCaps:  false,
    autoEnter:  false,
    autoBackSpace: false,
    search:     '',
    text: {
        timeInt:      null,
        timeSpent:    null,
        done:         [''],
        doneChars:    0,
        pending:      [''],
        pendingChars: 0,
        wrongs:       0,
        lastWrong:    '',
        corrects:     0,
        history:      []
    },
    ignoreKeys: [ 'CapsLock', 'Shift', 'Control', 'Backspace' ],
    masonry: null,
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
    startWriting(textId) {
      let poem = this.filteredPoems[textId].text;
      this.text.pending = Object.assign([], poem);
      this.status = 'WRITTING';
      if ("activeElement" in document)
        document.activeElement.blur();
    },
    stopWriting() {
      this.status = 'IDLE';
      setTimeout(() => {
        this.text.timeInt =      null;
        this.text.timeSpent =    null;
        this.text.done =         [''];
        this.text.doneChars =    0;
        this.text.pending =      [''];
        this.text.pendingChars = 0;
        this.text.wrongs =       0;
        this.text.lastWrong =    '';
        this.text.corrects =     0;
        this.text.history =      [];
      }, 500);
    },
    // Start the timer counting until status != 'WRITTING'
    startTimer() {
      let start = performance.now();
      this.text.timeInt = setTimeout(() => {
        this.stepTimer(start);
      }, 100);
    },
    stepTimer(start) {
      let now = performance.now();
      this.text.timeSpent = now - start;
      if(this.status == 'WRITTING') { 
        this.text.timeInt = setTimeout(() => {
          this.stepTimer(start);
        }, 100);
      }
    },
    // Apply automatic Caps & Accent to correct and key
    applyAutos(correct, key) {
      correct = (this.autoCaps    ? correct.toUpperCase() : correct);
      key     = (this.autoCaps    ? key.toUpperCase()     : key);
      correct = (this.autoAccent  ? correct.normalize('NFD').replace(/[\u0300-\u036f]/g, '')  : correct);
      key     = (this.autoAccent  ? key.normalize('NFD').replace(/[\u0300-\u036f]/g, '')      : key);
      return { correct, key };
    },
    // Apply automatic line breaks
    apllyAutoEnter() {
      if(this.autoEnter) {
        let nextCorrect = this.text.pending[0].length > 0 ? this.text.pending[0][0] : 'Enter';
        while(nextCorrect == 'Enter'){
          this.text.corrects += 1;
          this.text.pending[0] = this.text.pending[0].substring(1, this.text.pending[0].length);
          this.text.pending.shift();
          this.text.done.push('');
          if(!this.text.pending[0] && Object.keys(this.text.pending).length == 0) { return this.status = "WRITTEN"; }
          nextCorrect = this.text.pending[0].length > 0 ? this.text.pending[0][0] : 'Enter';
        }
      }
    },
    updateHistory(key, correct) {
      this.text.history.push(key == correct ? 1 : -1);
    }
  },
  created: function() {
    // Special Keys
    document.addEventListener('keydown', (event) => {
      let key = event.key;
      if(key == 'Escape')   { 
        if(this.status == 'WRITTING') { this.status = 'WRITTEN'; }
        else { this.stopWriting(); }
      }
      if(key == 'Backspace') {
        this.text.lastWrong = this.text.lastWrong.length > 0 ? this.text.lastWrong.substring(0, this.text.lastWrong.length-1) : '';
      }
    });
    
    // Characters
    document.addEventListener('keypress', (event) => {
      // Getting input key - return if is in ignore list
      let key = event.key;
      if(this.ignoreKeys.includes(key) || this.status != 'WRITTING') { return; }
      event.preventDefault();

      // Getting current line, if is empty the text is over
      if((this.text.pending.length == 1 && this.text.pending[0].length == 0)) { return this.status = 'WRITTEN'; }

      // Getting current letter, if is none is a breakline (Enter)
      let correct = this.text.pending[0] ? this.text.pending[0][0] : 'Enter';

      // Apply automatic treaments
      let autos = this.applyAutos(correct, key);
      correct = autos.correct;
      key = autos.key;

      // Update input history
      this.updateHistory(key, correct);
      
      if(key == correct  && (this.text.lastWrong == '')) {
        this.text.corrects += 1;
        // If   - its the first correct, start the timer
        if(this.text.corrects == 1) { this.startTimer(); }
        // Remove last character from pending
        this.text.pending[0] = this.text.pending[0].substring(1, this.text.pending[0].length);
        // If   - add line to done and remove line from pending
        // Else - add correct to done
        if(correct == 'Enter') {
          console.log('\n\n\n');
          console.log(this.text.pending);
          this.text.pending = this.text.pending.slice(1, this.text.pending.length);
          console.log(this.text.pending);
          this.text.done.push('');
          this.text.history.push([]);
        }else{
          this.text.done[this.text.done.length - 1] += correct;
        }
        // Apply automatic break lines
        this.apllyAutoEnter();
        // If is done
        let nextLine = this.text.pending[0];
        if(!nextLine && Object.keys(this.text.pending).length == 0) { return this.status = "WRITTEN"; }
      }else{
        this.text.wrongs += 1;
        if(!this.autoBackSpace){
          this.text.lastWrong += key;
        }
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
