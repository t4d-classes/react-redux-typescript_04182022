import { Color } from '../models/colors';

export type ColorListProps = {
  colors: Color[];
}

export const ColorList = (props: ColorListProps) => {

  return (
    <ul>
      {props.colors.map(color => <li key={color.id}>
        {color.name}
      </li>)}
    </ul>    
  );

}