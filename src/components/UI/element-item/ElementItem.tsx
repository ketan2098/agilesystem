import {
    Box,
    Image,
    Text,
} from '@chakra-ui/react';
import { useState } from 'react';

export function ElementItem() {

    const [hover, setHover] = useState(false)

    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                px={2}
                py={1}
                borderBottom={'border'}
                borderLeft={'border'}
                borderRight={'border'}
                gap={2}
                cursor={'pointer'}
                onPointerEnter={() => {
                    setHover(true)
                }}
                onPointerLeave={() => {
                    setHover(false)
                }}
            >
                <Text
                    w={'27% '}
                    alignSelf={'center'}
                    justifySelf={'center'}
                    opacity={hover ? 1 : 0.7}
                    textTransform={'uppercase'}
                    color='tx'
                    fontSize='2xs'
                    fontWeight={'semibold'}
                >front panel</Text>
                <Box
                    alignSelf={'center'}
                    justifySelf={'center'}
                    w={'15% '}
                    boxSize='18%'>
                    <Image
                        maxW={8}
                        src='/images/demo/tshirt.png' />
                </Box>

                <Text
                    opacity={hover ? 1 : 0.7}
                    w={'43% '}
                    lineHeight={'short'}
                    alignSelf={'center'}
                    justifySelf={'center'}
                    textTransform={'uppercase'} color='tx' fontSize='2xs' fontWeight={'semibold'}>
                    100% ployester amide
                    230 gsm
                    #c198123
                </Text>
                <Box
                    w={'15% '}
                    alignSelf={'center'}
                    justifySelf={'center'}
                >
                    <Image
                        maxW={8}
                        src='/images/demo/tshirt.png' />
                </Box>
            </Box>
        </>
    )
}
