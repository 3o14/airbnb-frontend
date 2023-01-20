import { HStack, Button, Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { FaAirbnb } from "react-icons/fa";

export default function Root() {
    return (
        <Box>
            <HStack>
                <FaAirbnb />
                <HStack>
                    <Button >Log in</Button>
                    <Button>Log out</Button>
                </HStack>
            </HStack>
            <Outlet/>
        </Box>
    );
}