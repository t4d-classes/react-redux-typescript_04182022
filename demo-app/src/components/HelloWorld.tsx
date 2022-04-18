// component
export const HelloWorld = () => {

  // jsx - not an HTML string, understand that jsx is function call
  // <></> - fragment is only needed when you have two or more top level elements
  return (
    <>
      <h1>Hello, World!</h1>
      <span>test</span>
    </>
  );

  // return (
  //   <h1>Hello, World!</h1>
  // );

  // transpiler converts JSX to
  // return (
  //   React.createElement('div', null,
  //     React.createElement('h1', null, 'Hello, World!'),
  //     React.createElement('span', null, 'test'))
  //);

};