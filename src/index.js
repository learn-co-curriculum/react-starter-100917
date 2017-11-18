import ReactDOM from 'react-dom';
import React from 'react';

const NavBar = props => {
  return React.createElement(
    'div',
    { className: `ui inverted ${props.color} menu` },
    React.createElement(
      'a',
      { className: 'item' },
      React.createElement('h2', { className: 'ui header' }, [
        React.createElement('i', { className: `${props.icon} icon` }),
        React.createElement('div', { className: 'content' }, props.title),
        React.createElement(
          'div',
          { className: 'sub header' },
          props.description
        )
      ])
    )
  );
};

ReactDOM.render(
  NavBar({
    color: 'green',
    title: 'Paintr',
    icon: 'paint brush',
    description: 'wow idk what this does'
  }),
  document.getElementById('main')
);
// // const createElement = (type, props = {}, children) => {
// //   return {
// //     $$typeof: Symbol.for('react.element'),
// //     type: type,
// //     props: { ...props, children: children },
// //     ref: null
// //   };
// // };
//
// const Article = props => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', {}, props.title),
//     React.createElement('p', {}, props.text)
//   ]);
// };
//

// <div class="ui inverted orange menu">
//     <a class='item'>
//       <h2 class="ui header">
//         <i class="paw icon"></i>
//         <div class="content">
//           ZooKeepr
//         </div>
//         <div class="sub header">
//           Keep track of your animals
//         </div>
//       </h2>
//     </a>
//   </div>
