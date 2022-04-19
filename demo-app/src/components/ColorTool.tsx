import { Color } from '../models/colors';
import { useList } from '../hooks/useList';
import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export type ColorToolProps = {
  colors: Color[];
  headerText: string;
};


export const ColorTool = (props: ColorToolProps) => {

  const [ colors, addColor ] = useList([...props.colors]);

  return (
    <>
      <ToolHeader headerText={props.headerText} />
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );

};