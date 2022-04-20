import { useColorTool } from '../hooks/useColorTool';
import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export type ColorToolProps = {
  headerText: string;
};

export const ColorTool = (props: ColorToolProps) => {

  const { colors, addColor } = useColorTool();

  return (
    <>
      <ToolHeader headerText={props.headerText} />
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );

};