import { Color } from '../models/colors';

export type ColorToolProps = {
  colors: Color[];
  headerText: string;
};


export const ColorTool = (props: ColorToolProps) => {

  props.colors.push({ id: 4, name: 'purple', hexcode: 'ff00ff' });


  const colorListItems = props.colors.map(color => <li key={color.id}>
    {color.name}
  </li>);

  return (
    <>
      <header>
        <h1>{props.headerText}</h1>
      </header>
      <ul>
        {colorListItems}
      </ul>
    </>
  );

};