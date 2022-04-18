import { Color } from '../models/colors';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';

export type ColorToolProps = {
  colors: Color[];
  headerText: string;
};


export const ColorTool = (props: ColorToolProps) => {

  return (
    <>
      <ToolHeader headerText={props.headerText} />
      <ColorList colors={props.colors} />
    </>
  );

};