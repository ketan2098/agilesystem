import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Center,
    Image,
    Text
} from '@chakra-ui/react';
import { ElementItem } from "../element-item/ElementItem";
import { useState } from 'react';

const Elements = () => {

    const [index, setIndex] = useState(1)

    return (
        <Box
            px={4}
            w={'100%'}
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
                onClick={() => {
                    setIndex(0)
                }}
            >
                <Text
                    fontSize={'xs'}
                    color={'tx'}
                    fontWeight={'bold'}
                >
                    ELEMENTS
                </Text>
            </Box>
            <Accordion
                pt={2}
                p={1}
                m={0}
                index={index}
                allowMultiple
                bgColor={'bgGray'}
                w={'100%'}
                border={'none'}
                dropShadow={'none'}

            >
                <AccordionItem
                    borderColor='bgLightGray'
                >
                    <AccordionButton
                        padding={0}
                        margin={0}
                        borderBottom={'border'}
                        onClick={() => {
                            if (index === 0) {
                                setIndex(1)
                            } else {
                                setIndex(0)
                            }
                        }}
                    >
                        <Flex
                            justifyContent={'space-between'}
                            w='100%'>
                            <Box w='10%' color='bgLightGray' borderLeft={'border'} borderRight='border'>
                                <AccordionIcon />
                            </Box>
                            <Box
                                justifySelf={'center'}
                                ml={8}
                                w={4} bg={'bgLightGray'}
                                position={'relative'}
                            >
                                <Box w={2}
                                    bg={'red'}
                                    zIndex={1}
                                ></Box>
                            </Box>
                            <Center w='75%'>
                                <Box boxSize='30px' border={'2px'} borderColor={'tx'} mr={8}>
                                    <Image src='/images/demo/tshirt.png' />
                                </Box>
                                <Text textTransform={'uppercase'} color='tx' fontSize='xs'>polo shirt</Text>
                            </Center>
                            <Box w='15%' color='bgLightGray'
                                borderLeft={'border'}
                                borderRight={'border'}
                            >
                                o
                            </Box>
                        </Flex>
                    </AccordionButton>
                    <AccordionPanel padding={0}
                    >
                        <ElementItem />
                        <ElementItem />
                        <ElementItem />
                        <ElementItem />
                        <ElementItem />
                    </AccordionPanel>
                </AccordionItem >
            </Accordion >
        </Box>
    )
}


export default Elements