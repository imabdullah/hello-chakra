import React from "react";
import { Component } from "react";
import { Box, Text } from "@chakra-ui/layout";

class Stat extends Component {
  render() {
    console.log("here");
    return (
      <>
        <Box borderRadius="md" bg="#2b2c30" p={2}>
          <Text textAlign="center" color="white">
            {this.props.stateValue ? this.props.stateValue : "-"} <br />
          </Text>

          <Text textAlign="center" textTransform="uppercase" fontSize={12}>
            {this.props.stateKey}
          </Text>
        </Box>
      </>
    );
  }
}
export default Stat;
