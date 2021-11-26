import { Button, Box } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import React from 'react'

function ToogleColorMode() {
    const { toggleColorMode } = useColorMode()

    const bg = useColorModeValue("red.500", "red.200")
    const color = useColorModeValue("white", "gray.800")

    return (
        <>
            <Box mb={4} bg={bg} color={color}>
                This box's style will change based on the color mode.
            </Box>
            <Button size="sm" onClick={toggleColorMode}>
                Toggle Mode
            </Button>
        </>
    )
}
export default ToogleColorMode;