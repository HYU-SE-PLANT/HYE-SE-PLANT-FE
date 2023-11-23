import { Box, Stack, Columns, Column } from '@mobily/stacks';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { getSeedImgByPlantName } from './gpt-button.util';

import { LOGO_FONT_IMG } from '@/assets';
import { Image, Text } from '@/atoms';
import { palette } from '@/utils';

type GPTButtonProps = {
  name: string;
  onPress: () => void;
};

export const GPTButton = memo<GPTButtonProps>(({ name, onPress }) => {
  const handlePressButton = () => {
    onPress();
  };

  return (
    <Box flex="fluid" alignY="center">
      <Stack space={8} style={{ minHeight: 128 }}>
        <Image
          source={{ uri: LOGO_FONT_IMG }}
          style={{ width: 80, height: 16 }}
          resizeMode="contain"
          skeletonStyle={{ width: 80, height: 16 }}
        />
        <Columns
          space={12}
          padding={12}
          style={{
            backgroundColor: palette['teal-400'],
            borderRadius: 12,
            borderTopLeftRadius: 0,
          }}>
          <Column width="content">
            <Image
              source={{ uri: getSeedImgByPlantName(name) }}
              style={{ width: 80, height: 80, borderRadius: 80 }}
              resizeMode="contain"
              skeletonStyle={{ width: 80, height: 80, borderRadius: 80 }}
            />
          </Column>
          <Column width="fluid">
            <Stack space={16}>
              <Text variants="bodyMedium" fontWeight="Medium" color="white">
                {`틔운 ${name} 씨앗 키트`}
              </Text>
              <TouchableOpacity onPress={handlePressButton}>
                <Box
                  alignX="center"
                  paddingY={12}
                  style={{
                    backgroundColor: palette['white'],
                    borderRadius: 8,
                  }}>
                  <Text
                    variants="bodyMedium"
                    fontWeight="Medium"
                    color="primary">
                    원클릭 구매
                  </Text>
                </Box>
              </TouchableOpacity>
            </Stack>
          </Column>
        </Columns>
      </Stack>
    </Box>
  );
});
