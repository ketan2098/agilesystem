import {
    Box,
    Text
} from '@chakra-ui/react';
import { useState } from 'react';
import { ColorPicker } from '../color-picker/ColorPicker';

const ColorPickerContainer = () => {
    const [show, setShow] = useState(false)

    return (
        <Box
            w={'full'}
            px={4}
        >
            <Box
                m={0}
                justifySelf={'start'}
                textAlign={'left'}
                backgroundColor={'bgGray'}
                w={'min-content'}
                px={3}
                h={5}
                borderTopRadius={4}
                cursor={'pointer'}
            >
                <Text
                    fontSize={'xs'}
                    color={'tx'}
                    fontWeight={'bold'}
                    onClick={() => {
                        setShow(prev => !prev)
                    }}
                >
                    TEXTURIZER
                </Text>
            </Box>
            <Box
                pt={2}
                p={1}
                m={0}
                // allowMultiple
                bgColor={'bgGray'}
                w={'100%'}
                border={'none'}
                dropShadow={'none'}

            >
                <Box
                    borderColor='bgLightGray'
                    aria-expanded={true}
                >
                    {show && (
                        <ColorPicker />
                    )}

                </Box >
            </Box >
        </Box>
    )
}

export default ColorPickerContainer