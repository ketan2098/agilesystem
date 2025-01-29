import { VStack, Text } from '@chakra-ui/react'
import UploadButton from '../Buttons/UploadButton'

const UploadForm = () => {
    return (
        <VStack
            p={4}
            minH={200}
        >
            <UploadButton />
            <Text
                lineHeight={'short'}
                alignSelf={'center'}
                justifySelf={'center'}
                textTransform={'uppercase'}
                color='tx'
                fontSize='2xs'
                fontWeight={'semibold'}
            >
                *FILES MUST BE LESS THAN 10MB
            </Text>
        </VStack>
    )
}

export default UploadForm