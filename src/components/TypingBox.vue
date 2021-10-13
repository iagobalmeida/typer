<template>
    <div class="mx-auto container d-flex justify-content-center align-items-center mb-5">
        <div class="text-justify d-flex justify-content-center aligns-item-center flex-column">
            <span class="text-primary" v-for="doneLine, doneInedx in donePrimary" :key="`doneLine_${doneInedx}`">
                {{ doneLine }}
            </span>
            <span>
                <span class="text-primary">{{ doneCurrent }}</span><small class="blink"><i class="fa fa-chevron-right text-muted"></i></small>{{ pendingCurrent }}
            </span>
            <span class="text-muted" v-for="pendingLine, pendingIndex in pendingMuted" :key="`pendingLine_${pendingIndex}`">
                {{ pendingLine }}
            </span>
        </div>
    </div>
    <small v-if="capslock" class="text-muted mt-5 text-justify"><i class="fas fa-keyboard"></i>&nbsp;<i>Capslock está ativo</i></small>
    <br>
    <small class="text-muted mt-5 text-justify"><i>Pressione <b>ESC</b> para voltar</i></small>
    
</template>

<script>
export default {
  name: 'TypingBox',
  props: {
      done: { type: Array },
      pending: { type: Array },
      capslock: { type: Boolean }
  },
  computed: {
      donePrimary: function() {
        return this.done.slice(0, this.done.length-1);
      },
      doneCurrent: function() {
        return this.done[this.done.length - 1];
      },
      pendingCurrent: function() {
        return this.pending[0];
      },
      pendingMuted: function() {
        return this.pending.slice(1,this.pending.length);
      }
  }
}
</script>

<style scoped>
    .blink {
        animation: blink 250ms ease-in-out infinite alternate-reverse;
    }
    @keyframes blink {
        0%{
            opacity: 0.7;
        }
        100%{
            opacity: 0.5;
        }
    }
</style>