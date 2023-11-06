import { Box, Stack } from '@mobily/stacks';

import { Button, Text } from '@/atoms';
import { palette } from '@/utils';

type PrimaryPlantCurrentListModuleProps = {};

export const PrimaryPlantCurrentListModule =
  ({}: PrimaryPlantCurrentListModuleProps) => {
    return (
      <Box
        alignX="center"
        alignY="center"
        paddingTop={24}
        style={{ backgroundColor: palette['gray-100'], height: '100%' }}>
        <Stack space={32}>
          <Text
            variants="labelLarge"
            fontWeight="Medium"
            color="gray-900"
            textAlignment="center">
            {'등록된 식물이 없어요.\n첫 식물을 등록해주세요!'}
          </Text>
          <Button mode="contained" onPress={() => {}} icon="add">
            <Text variants="labelLarge" fontWeight="Medium" color="white">
              식물 등록
            </Text>
          </Button>
        </Stack>
      </Box>
    );
  };
