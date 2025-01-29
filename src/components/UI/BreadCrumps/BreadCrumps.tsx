import { CalendarIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'

const BreadCrumpRow = ({ txt, isPrimary = true }: { txt: string, isPrimary?: boolean }) => {
    return (
        <Flex
            w={'full'}
            alignItems={'center'}
            justifyContent={'start'}
        >
            <Box
                mt={-1}
                h={1}
                w={4}
                borderBottom={'border'}
            />
            <TriangleDownIcon
                color={'tx'}
                fontSize={'2xs'}
                style={{
                    rotate: '-90deg'
                }}
                opacity={isPrimary ? 1 : 0}
                w={6}
                rotate={90}
            />
            {
                !isPrimary && (
                    <CalendarIcon
                        color={'tx'}
                    />
                )
            }
            <Text
                w={'full'}
                ml={2}
                fontSize={'sm'}
                color={'tx'}
                fontWeight={'bold'}
            >
                {txt}
            </Text>

        </Flex>
    )
}

const BreadCrumps = () => {

    const [show, setShow] = useState(true)
    return (
        <Box
            w={'full'}
            my={4}
            px={4}
        >
            <VStack
                alignItems={'start'}

            >

                <Flex
                    justifyContent={'start'}
                    alignItems={'center'}
                    cursor={'pointer'}
                    onClick={() => {
                        setShow(prev => !prev)
                    }}
                    pl={1}
                >
                    <TriangleDownIcon
                        color={'tx'}
                        fontSize={'xs'}
                        style={{
                            rotate: show ? '0deg' : '-90deg'
                        }}
                    />
                    <Center>
                        <Text
                            ml={2}
                            size={'sm'}
                            color={'tx'}
                            fontWeight={'semibold'}
                        >
                            AGILE SYSTEM
                        </Text>
                    </Center>
                </Flex>

                {
                    show && (
                        <VStack
                            borderLeft={'border'}
                            ml={2}
                            pt={5}
                            alignItems={'start'}
                        >
                            <VStack
                                alignItems={'start'}
                                mb={'-10px'}
                            >
                                <BreadCrumpRow
                                    isPrimary={false}
                                    txt={'Company Library'}
                                />
                                <BreadCrumpRow
                                    txt={'Active-X'}
                                />
                                <BreadCrumpRow
                                    txt={'Agile System'}
                                />
                            </VStack>
                        </VStack>
                    )
                }
            </VStack>
        </Box>

    )
}

export default BreadCrumps