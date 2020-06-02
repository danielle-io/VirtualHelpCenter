<template>
  <div class="example">
    <no-ssr>
      <codemirror
        class="codemirror"
        v-model="code"
        :options="cmOption"
        @cursorActivity="onCmCursorActivity"
        @ready="onCmReady"
        @focus="onCmFocus"
        @blur="onCmBlur"
      />
    </no-ssr>
    <pre class="pre">{{ code }}</pre>
  </div>
</template>

<script>
  import dedent from 'dedent'
  export default {
    name: 'codemirror-example-nuxt',
    data() {
      return {
        cmOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'text/x-python',
          theme: 'idea',
        },
        code: dedent`
          #Paste code here, if needed
        `
      }
    },
    methods: {
      onCmCursorActivity(codemirror) {
        console.debug('onCmCursorActivity', codemirror)
      },
      onCmReady(codemirror) {
        console.debug('onCmReady', codemirror)
      },
      onCmFocus(codemirror) {
        console.debug('onCmFocus', codemirror)
      },
      onCmBlur(codemirror) {
        console.debug('onCmBlur', codemirror)
      }
    }
  }
</script>

