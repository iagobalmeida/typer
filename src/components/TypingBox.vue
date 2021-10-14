<template>
    <div class="mx-auto container d-flex justify-content-center align-items-center mb-5">
        <div class="text-justify d-flex justify-content-center aligns-item-center flex-column">
            <span class="text-primary" v-for="doneLine, doneInedx in donePrimary" :key="`doneLine_${doneInedx}`">
                {{ doneLine }}
            </span>
            <span>
                <span class="text-primary">{{ doneCurrent }}</span>
                <span class="text-danger" v-if="lastWrong"> {{lastWrong}} </span>
                <small class="blink"><i class="fa fa-chevron-right text-muted"></i>
                </small>{{ pendingCurrent }}
            </span>
            <span class="text-muted" v-for="pendingLine, pendingIndex in pendingMuted" :key="`pendingLine_${pendingIndex}`">
                {{ pendingLine }}
            </span>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'TypingBox',
  props: {
      done: { type: Array },
      pending: { type: Array },
      lastWrong: { type: String }
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