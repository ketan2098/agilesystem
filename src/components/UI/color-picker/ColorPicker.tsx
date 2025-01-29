import { useState, useEffect, ChangeEvent } from "react";
import { RgbColorPicker } from "react-colorful";
import './ColorPicker.css';
import { NumberInput, NumberInputField, Stack, Text, Flex, HStack, Input, VStack, Image } from "@chakra-ui/react";
import DropDownMenu from "../Dynamic/DropDownMenu";


const FieldRGB = ({ txt, val, max, handlChange }: { txt: string, val: number, handlChange: (str: string) => void, max: number }) => {
    return (
        <Flex>
            <Text color={'tx'} fontSize='sm' mr='2' w={6}>{txt}</Text>
            <NumberInput size='xs' value={val} w={'100%'} max={max} onChange={handlChange}>
                <NumberInputField
                    bg={'bgDGray'}
                    color={'tx'}
                    border={'border'}
                    _focus={{
                        border: 'border'
                    }}

                />
            </NumberInput>
        </Flex>
    )
}


export function ColorPicker() {
    const [rgba, setRgba] = useState({ r: 0, g: 0, b: 0 });
    const [cmyk, setCmyk] = useState({ c: 0, m: 0, y: 0, k: 100 });
    const [hex, setHex] = useState("#000000");

    useEffect(() => {
        //i have to comment these because i got Warning Maximum update depth exceeded. This can happen when a component calls setState inside useEffect
        setCmyk(rgbaToCmyk(rgba));
        setHex(rgbaToHex(rgba));
    }, [rgba]);

    const handleColorChange = (color: { r: number, g: number, b: number }) => {
        setRgba(color);
    };

    const handleInputChange = (channel: string) => (value: string) => {
        setRgba((prevRgba) => ({
            ...prevRgba,
            [channel]: Math.min(Math.max(parseInt(value, 10), 0), 255) || 0
        }));
    };

    const handleHexChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        if (!value.startsWith("#")) {
            value = "#" + value;
        }
        setHex(value);
        if (/^#[0-9A-F]{6}$/i.test(value)) {
            setRgba(hexToRgba(value));
        }
    };

    const handleCmykChange = (channel: string) => (value: string) => {
        setCmyk((prevCmyk) => {
            const newCmyk = {
                ...prevCmyk,
                [channel]: Math.min(Math.max(parseInt(value, 10), 0), 100) || 0
            };
            setRgba(cmykToRgba(newCmyk));
            return newCmyk;
        });
    };

    return (
        <VStack
            py={8}
            px={15}
            w={'100%'}

        >
            <RgbColorPicker
                color={rgba} onChange={handleColorChange} />
            <HStack alignItems={'start'} mt='10' w={'100%'}>
                <Stack spacing={3} w={'60%'}>
                    <FieldRGB
                        txt="R: "
                        val={rgba.r}
                        max={255}
                        handlChange={handleInputChange('r')}
                    />
                    <FieldRGB
                        txt="G: "
                        val={rgba.g}
                        max={255}
                        handlChange={handleInputChange('g')}
                    />
                    <FieldRGB
                        txt="B: "
                        val={rgba.b}
                        max={255}
                        handlChange={handleInputChange('b')}
                    />
                    <Flex>
                        <Text color={'tx'} fontSize='sm' mr='2'>#</Text>
                        <Input
                            bg={'bgDGray'}
                            color={'tx'}
                            border={'border'}
                            _focus={{
                                border: 'border'
                            }}

                            value={hex}
                            onChange={handleHexChange}
                            placeholder='#Hex'
                            size='xs'
                            maxLength={7}
                        />
                    </Flex>
                </Stack>

                <Stack spacing={3} w={'40%'}>
                    <FieldRGB
                        txt="C: "
                        val={cmyk.c}
                        max={255}
                        handlChange={handleCmykChange('c')}
                    />
                    <FieldRGB
                        txt="M: "
                        val={cmyk.m}
                        max={255}
                        handlChange={handleCmykChange('m')}
                    />
                    <FieldRGB
                        txt="Y: "
                        val={cmyk.y}
                        max={255}
                        handlChange={handleCmykChange('y')}
                    />
                    <FieldRGB
                        txt="K: "
                        val={cmyk.k}
                        max={255}
                        handlChange={handleCmykChange('k')}
                    />
                </Stack>
            </HStack>
            <VStack
                my={4}
            >
                <Image
                    src="/images/demo/normalMap.png"
                />
                <HStack
                    w={'100%'}
                >

                    <Stack
                        w={'100%'}
                    >
                        <DropDownMenu
                            placeHolder={"Composition"}
                            list={
                                [
                                    "50%",
                                    "60%",
                                    "70%",
                                ]
                            }
                        />
                        <DropDownMenu
                            placeHolder={"type"}
                            list={
                                [
                                    "Fabric",
                                    "Wool",
                                ]
                            }
                        />
                        <DropDownMenu
                            placeHolder={"structure"}
                            list={
                                [
                                    "structure 1",
                                    "structure 2",
                                ]
                            }
                        />

                    </Stack>
                    <Stack
                        w={'100%'}
                    >
                        <DropDownMenu
                            placeHolder={"Weight"}
                            list={
                                [
                                    "50%",
                                    "60%",
                                    "70%",
                                ]
                            }
                        />
                        <DropDownMenu
                            placeHolder={"Finish"}
                            list={
                                [
                                    "Fabric",
                                    "Wool",
                                ]
                            }
                        />
                        <DropDownMenu
                            placeHolder={"Coating"}
                            list={
                                [
                                    "Coating 1",
                                    "Coating 2",
                                ]
                            }
                        />

                    </Stack>
                </HStack>
            </VStack>
        </VStack>
    );
}



const rgbaToCmyk = ({ r, g, b }: { r: number, g: number, b: number }) => {
    let c = 1 - (r / 255);
    let m = 1 - (g / 255);
    let y = 1 - (b / 255);
    const k = Math.min(c, m, y);

    if (k === 1) {
        c = 0;
        m = 0;
        y = 0;
    } else {
        c = (c - k) / (1 - k);
        m = (m - k) / (1 - k);
        y = (y - k) / (1 - k);
    }

    return {
        c: Math.round(c * 100),
        m: Math.round(m * 100),
        y: Math.round(y * 100),
        k: Math.round(k * 100)
    };
};

const cmykToRgba = ({ c, m, y, k }: { c: number, m: number, y: number, k: number }) => {
    const r = 255 * (1 - c / 100) * (1 - k / 100);
    const g = 255 * (1 - m / 100) * (1 - k / 100);
    const b = 255 * (1 - y / 100) * (1 - k / 100);
    return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
};

const rgbaToHex = ({ r, g, b }: { r: number, g: number, b: number }) => {
    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const hexToRgba = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
};
