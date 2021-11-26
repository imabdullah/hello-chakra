import { Box, Image, Button, Container, Heading, Grid, Badge } from "@chakra-ui/react";
import logo from '../assets/brand-logo.svg';
import illustration from '../assets/illustration.svg';
import imageOne from '../assets/image-one.jpg';
import imageTwo from '../assets/image-two.jpg';
import imageThree from '../assets/image-three.jpg';
import rightArrow from '../assets/right-arrow.png';


function Banner() {
    return (
        <>
            <header>
                <Box d="flex" align-items="center" justifyContent="space-between" ml={6} mr={6}>
                    <Image src={logo} boxSize="90px" alt="brand" />

                    <Box>
                        <Button pr={3} colorScheme="gray.100" fontSize="sm" variant="Link">Log in</Button>
                        <Button colorScheme="gray.100" fontSize="sm" variant="Link">Sign Up</Button>
                    </Box>
                </Box>
            </header>


            <Box>
                <Container maxWidth="container.xl">
                    <Box d="flex" alignItems="center" py="20" flexDirection="row">
                        <Box>
                            <Heading>
                                <Box>Dive in! There are so many things to do in Meetup</Box>
                            </Heading>
                            <Box mt="6" fontWeight="medium">
                                Join a group to meet people, make friends, find support, grow a business,
                                and explore your interests. Thousands of events are happening every day, both online in person!
                            </Box>
                        </Box>
                        <Box w="100%"><Image src={illustration} w="100%" alt="illustration" /></Box>
                    </Box>
                </Container>
            </Box>


            <Container maxW="container.xl" mt={10}>
                <Grid templateColumns="repeat(3, lfr)">
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </Grid>
            </Container>
            <Container maxW="container.xl" mt={10}>
                <Grid templateColumns="repeat(3, 1fr)">
                    <Box>
                        <Image w="100%" borderRadius="lg" src={imageOne} alt="image" />
                        <Button colorScheme="teal" variant="link" mt="5">
                            Explore the outdoors
                            <Image w="10%" ml="2" src={rightArrow} alt="right arrow" />
                        </Button>
                    </Box>
                    <Box>
                        <Image w="100%" borderRadius="lg" src={imageTwo} alt="image" />
                        <Button colorScheme="teal" variant="link" mt="5">
                            Explore the outdoors
                            <Image w="10%" ml="2" src={rightArrow} alt="right arrow" />
                        </Button>
                    </Box>
                    <Box>
                        <Image w="100%" borderRadius="lg" src={imageThree} alt="image" />
                        <Button colorScheme="teal" variant="link" mt="5">
                            Explore the outdoors
                            <Image w="10%" ml="2" src={rightArrow} alt="right arrow" />
                        </Button>
                    </Box>
                </Grid>

            </Container>



            <Container maxW="container.xl" mt="4">
                <Box direction="row" display="flex" flexWrap="wrap" justifyContent="">
                    <Badge borderRadius="3xl" px={4} py={2} mr="4" mb="4" textTransform="normal" color="#ffffff" bg="blue.100"> Boost your Career</Badge>
                    <Badge borderRadius="3xl" px={4} py={2} mr="4" mb="4" textTransform="normal" color="#ffffff" bg="blue.100"> Boost your Career</Badge>

                    <Badge borderRadius="3xl" px={4} py={2} mr="4" mb="4" textTransform="normal" color="#ffffff" bg="blue.100"> Boost your Career</Badge>

                    <Badge borderRadius="3xl" px={4} py={2} mr="4" mb="4" textTransform="normal" color="#ffffff" bg="blue.100"> Boost your Career</Badge>

                    <Badge borderRadius="3xl" px={4} py={2} mr="4" mb="4" textTransform="normal" color="#ffffff" bg="blue.100"> Boost your Career</Badge>

                    <Badge borderRadius="3xl" px={4} py={2} mr="4" mb="4" textTransform="normal" color="#ffffff" bg="blue.100"> Boost your Career</Badge>


                </Box>
            </Container>


            <Container maxW="container.xl" mt="20">
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <Box>

                    </Box>
                </Grid>
            </Container>
        </>);
}

export default Banner;