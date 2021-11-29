import React, { Component } from "react";

import { Box, Image, Text, Grid, HStack, Flex } from "@chakra-ui/react";
import dateFormat from "dateformat";
import Stat from "./Stat";

class Post extends Component {
  render() {
    const post = this.props.post;

    return (
      <>
        <Box>
          <Box
            boxShadow="inset 55px 0 1px -4px rgba(112, 117, 126, 0.8),inset -55px 0 1px -4px rgba(112, 117, 126, 0.9);"
            display="flex"
            bgImage={post.images[0]}
            boxSize="400px"
            w="100%"
            bgSize="100%"
            alignItems="end"
            pb="2"
            align-items="center"
            justifyContent="space-between"
          >
            <HStack mx={2} opacity="8">
              <Image
                borderRadius="full"
                boxSize="50px"
                src={post.influencerImage}
                alt="Segun Adebayo"
              />
              <Box>
                <Text as="b" color="white">
                  {post.influencerName}
                </Text>
                <Text>{post.handle}</Text>
              </Box>
            </HStack>
          </Box>

          <Flex align="center" justify="center" mt="2">
            <Text fontSize="13px">Posted on </Text> &nbsp;
            <Text fontSize="sm" color="white">
              {dateFormat(post.postingDate, "mmmm dS yyyy")}
            </Text>
          </Flex>

          <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={2}>
            {Object.keys(post.stats).map((key) => (
              <Stat key={key} stateKey={key} stateValue={post.stats[key]} />
            ))}
          </Grid>
        </Box>
      </>
    );
  }
}
export default Post;
