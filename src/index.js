const createElement = (type, props = {}, children) => ({
  $$typeof: Symbol.for('react.element'),
  props: Object.assign(props, { children }),
  type: type,
  ref: null
});

const header = data => {
  return createElement('h1', {}, data.text);
};

// const article = data => {
//   return createElement
// }

const article = props => {
  return createElement('div', { className: 'article' }, [
    createElement('h1', {}, props.title),
    createElement('p', {}, props.text)
  ]);
};

{
  /* <div class="ui inverted orange menu">
  <a class="item">
    <h2 class="ui header">
      <i class="paw icon" />
      <div class="content">ZooKeepr</div>
      <div class="sub header">Keep track of your animals</div>
    </h2>
  </a>
</div>; */
}

const navbar = props => {};

navbar({ color: 'blue', title: 'Our app', description: 'idk', icon: 'alert' });

ReactDOM.render(
  article({ title: 'the news', text: 'even worst' }),
  document.getElementById('main')
);
