import { Grid, GridItem } from "@chakra-ui/react"
import TextureLibraryElement from "./TextureLibraryElement"

const TextureLibrary = () => {
    return (
        <Grid
            overflowY={'auto'}
            h={1000}
            minH={300}
            p={8}
            w={'full'}
            bgColor={'black'}
            templateColumns='repeat(4, 2fr)'
            gap={5}
        >
            <GridItem colSpan={2} >
                <TextureLibraryElement
                    src={'/images/demo/texture.png'}
                    text1={'AGILE-LOGO'}
                    text2={'PNG . AS LOGO'}
                />
            </GridItem>
            <GridItem colSpan={2} >
                <TextureLibraryElement
                    src={'/images/demo/texture.png'}
                    text1={'AGILE-LOGO'}
                    text2={'PNG . AS LOGO'}
                />
            </GridItem>
            <GridItem colSpan={2} >
                <TextureLibraryElement
                    src={'/images/demo/texture.png'}
                    text1={'AGILE-LOGO'}
                    text2={'PNG . AS LOGO'}
                />
            </GridItem>
            <GridItem colSpan={2} >
                <TextureLibraryElement
                    src={'/images/demo/texture.png'}
                    text1={'AGILE-LOGO'}
                    text2={'PNG . AS LOGO'}
                />
            </GridItem>
        </Grid>
    )
}

export default TextureLibrary