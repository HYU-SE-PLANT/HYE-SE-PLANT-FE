import { Box } from '@mobily/stacks';
import { PropsWithChildren } from 'react';

import { palette } from '@/utils';

type BasicLayoutProps = PropsWithChildren<{
  backgroundColor: 'white' | 'gray-100';
}>;

export const BasicLayout = ({
  children,
  backgroundColor,
}: BasicLayoutProps) => {
  return (
    <Box
      flex="fluid"
      paddingX={24}
      paddingTop={32}
      paddingBottom={32}
      style={{
        width: '100%',
        backgroundColor: palette[backgroundColor],
      }}>
      {children}
    </Box>
  );
};
