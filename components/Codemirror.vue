<template>
  <div class="example">
    <client-only>
      <codemirror
        class="codemirror"
        :value="codeSnippet"
        :options="cmOption"
        @cursorActivity="onCmCursorActivity"
        @ready="onCmReady"
        @focus="onCmFocus"
        @blur="onCmBlur"
        @input="$emit('input', $event)"
      />
    </client-only>
    <!-- <pre class="pre">{{ code }}</pre> -->
  </div>
</template>

<script>
  import dedent from 'dedent'
  export default {
    name: 'codemirror-example-nuxt',
    props: {
        codeSnippet: {
            type: String
        }
    },
    data() {
      return {
        cmOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'text/x-python',
          theme: 'idea'
        },
        code: this.codeSnippet,
      }
    },
    methods: {
      onCmCursorActivity(codemirror) {
      },
      onCmReady(codemirror) {
      },
      onCmFocus(codemirror) {
      },
      onCmBlur(codemirror) {
      }
    }
  }
</script>