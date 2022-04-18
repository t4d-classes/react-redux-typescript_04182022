import { useState } from 'react';

import { Color, NewColor } from '../models/colors';
import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export type ColorToolProps = {
  colors: Color[];
  headerText: string;
};


export const ColorTool = (props: ColorToolProps) => {

  const [ colors, setColors ] = useState([...props.colors]);

  const addColor = (color: NewColor) => {

    setColors([
      ...colors,
      {
        ...color,
        id: Math.max(...colors.map(c => c.id), 0) + 1,
      }
    ]);

  };

  return (
    <>
      <ToolHeader headerText={props.headerText} />
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );

};