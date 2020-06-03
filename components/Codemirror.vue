<template>
  <div class="example">
    <no-ssr>
      <codemirror
        class="codemirror"
        :value="codeSnippet"
        :options="cmOption"
        v-model="code"
        @cursorActivity="onCmCursorActivity"
        @ready="onCmReady"
        @focus="onCmFocus"
        @blur="onCmBlur"
        @input="$emit('input', $event)"
      />
    </no-ssr>
    <!-- <pre class="pre">{{ code }}</pre> -->
  </div>
</template>

<script>
  import dedent from 'dedent'
  export default {
    name: 'codemirror-example-nuxt',
    // model: {
    //     prop: 'value'
    // },
    props: {
        codeSnippet: {
            type: String
        },
        initialCode: {
            type: String
        }
    },
    data() {

        console.log(this.initialCode)
      return {
        cmOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'text/x-python',
          theme: 'idea'
        },
        code: this.initialCode
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