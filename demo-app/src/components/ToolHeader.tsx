import { memo } from 'react';

export type ToolHeaderProps = {
  headerText: string;
}

export const ToolHeader = memo((props: ToolHeaderProps) => {

  return (
    <header>
      <h1>{props.headerText}</h1>
    </header>
  );
});