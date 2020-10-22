<script>
export default {
  functional: true,
  props: {
    url: String,
    title: String,
  },
  render(createElement, context) {
    return createElement('div', {
      attrs: {
        class: 'articleToolBar',
      },
    }, [
      createElement('button', {
        on: {
          click: context.listeners.readFullNews,
        },
        attrs: {
          class: 'btn-toolbar redirectButton',
        },
      }, ['Read full story']),
      createElement('button', {
        on: {
          click: context.listeners.changeTitle,
        },
        attrs: {
          class: 'mx-4 btn-toolbar editTitleButton',
        },
      }, ['Edit Title']),
    ]);
  },
};
</script>
