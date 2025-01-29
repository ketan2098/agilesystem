import { BellIcon, ChevronDownIcon, StarIcon } from '@chakra-ui/icons';
import { VStack, Text, HStack, Flex } from '@chakra-ui/react';


const FileViewerSingle = () => {
    return (
        <VStack
            px={8}
            w={'full'}
            py={10}
            bgColor={'bgD2Gray'}
            gap={3}
            position={'relative'}
        >
            <Flex
                position={'absolute'}
                top={2}
                gap={2}
                right={2}
            >
                <BellIcon fontSize={'md'} color={'cyan'} />
                <StarIcon fontSize={'sm'} color={'white'} />
            </Flex>

            <Flex
                position={'absolute'}
                gap={2}
                bottom={2}
            >
                <ChevronDownIcon fontSize={'md'} color={'white'} />
            </Flex>

            <HStack
                w={'full'}
            >
                <Text
                    opacity={0.7}
                    lineHeight={'shorter'}
                    alignSelf={'start'}
                    // pl={4}
                    justifySelf={'center'}
                    textTransform={'uppercase'}
                    color='tx'
                    fontSize='xs'
                    fontWeight={'semibold'}
                >
                    FILE NAME 12
                </Text>
                <></>
            </HStack>
            <HStack
                w={'full'}
            >
                <Text
                    opacity={0.7}
                    lineHeight={'shorter'}
                    alignSelf={'start'}
                    // pl={4}
                    justifySelf={'center'}
                    textTransform={'uppercase'}
                    color='tx'
                    fontSize='xs'
                    fontWeight={'semibold'}
                >
                    POLO SHIRT
                </Text>
                <></>
            </HStack>
            <HStack
                w={'full'}
                gap={4}
            >
                <Text
                    opacity={0.7}
                    lineHeight={'shorter'}
                    alignSelf={'start'}
                    w={'35%'}
                    justifySelf={'center'}
                    textTransform={'uppercase'}
                    color='tx'
                    fontSize='xs'
                    fontWeight={'semibold'}
                >
                    CONTENT NO
                </Text>
                <Text
                    w={'65%'}
                    opacity={0.7}
                    lineHeight={'shorter'}
                    alignSelf={'start'}
                    justifySelf={'center'}
                    textTransform={'uppercase'}
                    color='white'
                    fontSize='xs'
                    fontWeight={'semibold'}
                >
                    STY0000007
                </Text>
            </HStack>
            <HStack
                w={'full'}
                gap={4}
            >
                <Text
                    opacity={0.7}
                    lineHeight={'shorter'}
                    alignSelf={'start'}
                    w={'35%'}
                    justifySelf={'center'}
                    textTransform={'uppercase'}
                    color='tx'
                    fontSize='xs'
                    fontWeight={'semibold'}
                >
                    WORKFLOW
                </Text>
                <Text
                    w={'65%'}
                    opacity={0.7}
                    lineHeight={'shorter'}
                    alignSelf={'start'}
                    justifySelf={'center'}
                    textTransform={'uppercase'}
                    color='white'
                    fontSize='xs'
                    fontWeight={'semibold'}
                >
                    DRAFT
                </Text>
            </HStack>
        </VStack>
    )
}

export default FileViewerSingle