import { Select } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const DropDownMenu = (
    {
        placeHolder,
        value,
        list
    }: {
        placeHolder: string
        value?: string
        list: string[]
    }
) => {
    return (
        <Select
            placeholder={placeHolder}
            value={value}
            borderRadius={2}
            p={0}
            m={0}
            w={'100%'}
            fontSize={'sm'}
            size='xs'
            color={'tx'}
            bg={'bgDGray'}
            border={'borderDark'}
            _hover={{
                border: 'borderDark'
            }}
            _active={{
                border: 'borderDark'
            }}
            icon={<ChevronDownIcon color={'tx'} bg={'bgGray'} w={1} h={1} fontSize={'2xl'}
                right={-2}
                top={'1px'}
                border={'borderDark'}
                position={'absolute'}
            />}
        >
            {list.map((item, key) => (
                <option value={item} key={key}>{item}</option>
            ))}
        </Select>
    )
}

export default DropDownMenu