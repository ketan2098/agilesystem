import { Box, Flex, VStack, Switch, FormControl, FormLabel, Menu, MenuButton, Text, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { ARcubeIcon, AudiIcon, DevIcon, QualityModifierIcon, RobotIcon } from "../custom-icons/CustomIcons";



export function Settings() {


    const [selectedAudioOption, setSelectedAudioOption] = useState('no data fill');
    const [selectedQuality, setSelectedQuality] = useState('Auto(1440p)');


    return (
        <>
            <VStack
                position='fixed'
                zIndex={999} right={5}
                bottom={5}
                bg="rgba(48, 48, 48, 0.7)"
                height='200px'
                width='300px'
                padding={4}
                borderRadius={10}
                gap={3}
            >
                <Box w='100%'>
                    <Flex alignItems='center'>
                        <DevIcon color="white" mr={2} width={4} height={4} />
                        <FormControl display='flex' alignItems='center' justifyContent="space-between" flex={1}>
                            <FormLabel id='dev-mode' mb='0' color='white'>
                                Developer Mode
                            </FormLabel>
                            <Switch id='dev-mode' colorScheme='red' size='sm' />
                        </FormControl>
                    </Flex>
                </Box>
                <Box w='100%'>
                    <Flex alignItems='center'>
                        <ARcubeIcon color="white" mr={2} width={5} height={5} />
                        <FormControl display='flex' alignItems='center' justifyContent="space-between" flex={1}>
                            <FormLabel id='dev-mode' mb='0' color='white'>
                                AR
                            </FormLabel>
                            <Switch id='dev-mode' colorScheme='red' size='sm' />
                        </FormControl>
                    </Flex>
                </Box>
                <Box w='100%'>
                    <Flex alignItems='center'>
                        <RobotIcon color="white" mr={2} width={5} height={5} />
                        <FormControl display='flex' alignItems='center' justifyContent="space-between" flex={1}>
                            <FormLabel id='dev-mode' mb='0' color='white'>
                                AI
                            </FormLabel>
                            <Switch id='dev-mode' colorScheme='red' size='sm' />
                        </FormControl>
                    </Flex>
                </Box>
                <Box w='100%'>
                    <Flex alignItems='center'>
                        <AudiIcon color='white' mr={2} width={5} height={5} />
                        <FormControl display='flex' alignItems='center' justifyContent="space-between" flex={1}>
                            <FormLabel id='dev-mode' mb='0' color='white'>
                                Audio
                            </FormLabel>
                            <Menu>
                                <MenuButton as={Text} fontSize='md' color='white' userSelect='none' cursor='pointer'  >
                                    {selectedAudioOption} <ChevronRightIcon />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={() => setSelectedAudioOption('Option 1')}>Option 1</MenuItem>
                                    <MenuItem onClick={() => setSelectedAudioOption('Option 2')}>Option 2</MenuItem>
                                    <MenuItem onClick={() => setSelectedAudioOption('Option 3')}>Option 3</MenuItem>
                                    <MenuItem onClick={() => setSelectedAudioOption('Option 4')}>Option 4</MenuItem>
                                    <MenuItem onClick={() => setSelectedAudioOption('Option 5')}>Option 5</MenuItem>
                                </MenuList>
                            </Menu>
                        </FormControl>
                    </Flex>
                </Box>



                <Box w='100%'>
                    <Flex alignItems='center'>
                        <QualityModifierIcon color='white' mr={2} width={5} height={5} />
                        <FormControl display='flex' alignItems='center' justifyContent="space-between" flex={1}>
                            <FormLabel id='dev-mode' mb='0' color='white'>
                                Quality
                            </FormLabel>
                            <Menu>
                                <MenuButton as={Text} fontSize='md' color='white' userSelect='none' cursor='pointer'>
                                    {selectedQuality} <ChevronRightIcon />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={() => setSelectedQuality('360p')}>360p</MenuItem>
                                    <MenuItem onClick={() => setSelectedQuality('480p')}>480p</MenuItem>
                                    <MenuItem onClick={() => setSelectedQuality('720p')}>720p</MenuItem>
                                    <MenuItem onClick={() => setSelectedQuality('1080p')}>1080p</MenuItem>
                                    <MenuItem onClick={() => setSelectedQuality('1440p')}>1080p</MenuItem>
                                </MenuList>
                            </Menu>
                        </FormControl>
                    </Flex>
                </Box>
            </VStack >
        </>
    )
}