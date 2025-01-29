import { useState } from 'react'
import { Box, Image, Text, Flex, VStack } from '@chakra-ui/react';

const CustomText = ({ hover, text }: { hover: boolean, text: string }) => {
    return (
        <Text
            opacity={hover ? 1 : 0.7}
            lineHeight={'shorter'}
            alignSelf={'start'}
            pl={4}
            justifySelf={'center'}
            textTransform={'uppercase'} color='tx' fontSize='2xs' fontWeight={'semibold'}>
            {text}
        </Text>
    )
}

const FileViewerList = (
    {
        src,
        text1,
        text2,
        text3,
        text4,
    }: {
        src: string
        text1: string
        text2: string
        text3: string
        text4: string
    }
) => {

    const [hover, setHover] = useState(false)


    return (
        <Flex
            w={'full'}
            p={4}
            border={hover ? 'borderWhite' : 'border'}
            cursor={'pointer'}
            onPointerEnter={() => {
                setHover(true)
            }}
            onPointerLeave={() => {
                setHover(false)
            }}
            gap={2}
        >
            <Box
                alignSelf={'center'}
                justifySelf={'center'}
                w={'20%'}
            >
                <Image
                    w={'full'}
                    src={src}
                />
            </Box>
            <VStack
                w={'40% '}
                m={0}
                gap={1}
            >
                <CustomText
                    hover={hover}
                    text={'FILENAME'}
                />
                <CustomText
                    hover={hover}
                    text={text1}
                />
                <CustomText
                    hover={hover}
                    text={'CONTENT ID'}
                />
                <CustomText
                    hover={hover}
                    text={text2}
                />
            </VStack>
            <VStack
                w={'40% '}
                gap={1}
            >
                <CustomText
                    hover={hover}
                    text={'FILE SIZE'}
                />
                <CustomText
                    hover={hover}
                    text={text3}
                />
                <CustomText
                    hover={hover}
                    text={'DATE CREATED'}
                />
                <CustomText
                    hover={hover}
                    text={text4}
                />
            </VStack>
        </Flex>)
}

export default FileViewerList