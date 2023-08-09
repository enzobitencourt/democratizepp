import {Menu,MenuButton,MenuList,MenuItem,  } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'

function ConfigDrop(){
    return(
        <>
        <Menu>
            <MenuButton
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'outline' }}
            >
                File <ChevronDownIcon />
            </MenuButton>
            <MenuList>
                <MenuItem>New File</MenuItem>
                <MenuItem>New Window</MenuItem>
                <MenuDivider />
                <MenuItem>Open...</MenuItem>
                <MenuItem>Save File</MenuItem>
            </MenuList>
        </Menu>
        </>
    )
}

export default ConfigDrop