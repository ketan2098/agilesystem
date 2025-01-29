import { VStack } from '@chakra-ui/react';
import FileViewerList from './FileViewerList';

const FileViewer = () => {

    return (
        <VStack
            px={4}
        >
            <FileViewerList
                src={'/images/demo/normalMap.png'}
                text1='POLO SHIRT'
                text2='STY000007'
                text3='148.5MB'
                text4='07/03/2024'
            />
            <FileViewerList
                src={'/images/demo/normalMap.png'}
                text1='POLO SHIRT'
                text2='STY000007'
                text3='148.5MB'
                text4='07/03/2024' />
            <FileViewerList
                src={'/images/demo/normalMap.png'}
                text1='POLO SHIRT'
                text2='STY000007'
                text3='148.5MB'
                text4='07/03/2024' />
            <FileViewerList
                src={'/images/demo/normalMap.png'}
                text1='POLO SHIRT'
                text2='STY000007'
                text3='148.5MB'
                text4='07/03/2024'
            />

        </VStack>
    )
}

export default FileViewer