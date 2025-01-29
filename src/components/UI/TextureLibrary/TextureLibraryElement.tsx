import { Image, Text, VStack } from '@chakra-ui/react'

const TextureLibraryElement = (
    {
        src,
        text1,
        text2,
    }: {
        src: string
        text1: string
        text2: string
    }
) => {
    return (
        <VStack>
            <Image src={src} />
            <Text
                lineHeight={'short'}
                alignSelf={'center'}
                justifySelf={'center'}
                textTransform={'uppercase'}
                color='tx'
                fontSize='2xs'
                fontWeight={'semibold'}
            >
                {text1}
            </Text>
            <Text
                lineHeight={'short'}
                alignSelf={'center'}
                justifySelf={'center'}
                textTransform={'uppercase'}
                color='tx'
                fontSize='2xs'
                fontWeight={'semibold'}
            >
                {text2}
            </Text>
        </VStack>
    )
}

export default TextureLibraryElement