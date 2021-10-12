<template>
  <div class="d-flex justify-content-center aligns-item-center flex-column">
        <span class="text-primary" v-for="done_line, done_index in done.slice(0, done.length-1)" :key="`done_line_${done_index}`">
            {{ done_line }}
        </span>
        <span>
            <span class="text-primary">{{ done[done.length - 1] }}</span> <b class="blink">></b> {{ pending[0] }}
        </span>
        <span class="text-muted" v-for="pending_line, pending_index in pending.slice(1, pending.length)" :key="`pending_line_${pending_index}`">
            {{ pending_line }}
        </span>
  </div>
</template>

<script>
export default {
  name: 'TypingBox',
  props: {
      done: { type: Array },
      pending: { type: Array }
  }
}
</script>

<style scoped>
    .blink {
        animation: blink 250ms ease-in-out infinite alternate-reverse;
    }
    @keyframes blink {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0.5;
        }
    }
</style>