<script>
export default {
  functional: true,
  props: {
    title: String,
    createdOn: String,
    author: String,
  },
  render(createElement, context) {
    const headline = createElement('h1', {
      attrs: {
        class: '.text-h1 text--primary',
      },
    }, context.props.title);

    const readNewsButton = createElement('button', {
      on: {
        click: context.listeners.readFullNews,
      },
      attrs: {
        class: 'redirectButton',
      },
    }, ['Read full story']);

    const editTitleButton = createElement('button', {
      on: {
        click: context.listeners.changeTitle,
      },
      attrs: {
        class: 'btn-toolbar editTitleButton',
      },
    }, ['Edit Title']);

    const subtitle = createElement('small', {
      attrs: {
      },
    }, ['By ', context.props.author, ' | ', context.props.createdOn]);

    const buttonWrapper = createElement('div', {
      attrs: {
        class: 'buttonWrapper',
      },
    }, [readNewsButton, editTitleButton]);

    const infoWrapper = createElement('div', {
      attrs: {
        class: 'infoWrapper',
      },
    }, [subtitle, buttonWrapper]);

    return createElement('div', {
      attrs: {
        class: 'articleToolBar',
      },
    }, [
      headline,
      infoWrapper,
    ]);
  },
};
</script>
