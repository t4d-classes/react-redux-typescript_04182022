import { useColorTool } from '../hooks/useColorTool';

import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export const ColorTool = () => {

  const { colors, addColor } = useColorTool();

  return (
    <>
      <header>
        <h2>Color Tool</h2>
      </header>
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );

};