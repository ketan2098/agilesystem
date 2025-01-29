import { Center, Flex, Text } from '@chakra-ui/react'

const SideBarHeader = () => {
    return (
        <Flex
            bg={'black'}
            color={'white'}
            h={10}
            w={'full'}
            p={4}
            m={0}
            gap={0}
        >
            <Center
                alignSelf={'center'}
            >

                <Text size={'md'}>
                    Agile System  &gt; Company Library
                </Text>
            </Center>

        </Flex>
    )
}

export default SideBarHeader