import {FC, PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {
  dataTestId?: string;
}

export const Text: FC<Props> = ({children, dataTestId}) => {
  return <span data-testid={dataTestId}>{children}</span>;
};
