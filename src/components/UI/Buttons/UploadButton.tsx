import { LinkIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

const UploadButton = () => {
    return (
        <Button
            border={'borderBlack'}
            borderRadius={3}
            w={180}
            h={6}
            fontSize={'2xs'}
            fontWeight={'bold'}
            textTransform={'uppercase'}
            color={'tx'}
            bg={'none'}
            leftIcon={<LinkIcon />}
        >
            Upload A File
        </Button>
    )
}

export default UploadButton