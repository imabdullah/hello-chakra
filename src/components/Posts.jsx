import React, { Component } from "react";

import { Container, Grid } from "@chakra-ui/react";

import Post from "./Post";

class Posts extends Component {
  state = {
    posts: [
      {
        images: [
          "https://cdn.filestackcontent.com/6jYNUWIRDaMQND1bJJPl",
          "https://cirqle-campaign-cached-images.s3.amazonaws.com/socialcontent/blogger/464672/external/17848266506386063_17841401429442731/images/3d856ee5bbf8d5aa32ba5490e5e80185.jpg",
          "https://cirqle-campaign-cached-images.s3.amazonaws.com/socialcontent/blogger/464672/external/18034045939281925_17841401429442731/images/d31ebcb7fb4259a8745cbf88ea906fb8.jpg",
        ],
        influencerName: "Girl Eats NYC • Lori",
        influencerImage:
          "https://cdn.thecirqle.com/?https://scontent.cdninstagram.com/t51.2885-19/s320x320/57088324_418190442300658_1433682017802780672_n.jpg",
        handle: "@girleatsnyc",
        postingDate: "2021-04-08T09:10:33+00:00",
        stats: {
          impressions: 12889,
          reach: 15001,
          engagement: 1.45,
        },
      },
      {
        images: [
          "https://cirqle-campaign-cached-images.s3.amazonaws.com/socialcontent/blogger/457873/external/18168592207062910_17841401295254035/images/e7b0ec0bb2025d69367d69a03101e607.jpg",
        ],
        influencerName: "Christine Yi",
        influencerImage:
          "https://res.cloudinary.com/cirqle/image/upload/v1588044264/tdbqlexciuurrzenuqzf.jpg",
        handle: "@cy_eats",
        postingDate: "2021-04-05T11:14:28+00:00",
        stats: {
          impressions: 126,
          reach: 160,
          engagement: null,
        },
      },
      {
        images: [
          "https://cirqle-campaign-cached-images.s3.amazonaws.com/socialcontent/blogger/457873/external/17920101874465465_17841401295254035/images/82709d13bf928fd21f4fff3568961217.jpg",
          "https://cirqle-campaign-cached-images.s3.amazonaws.com/socialcontent/blogger/457873/external/17857111688252646_17841401295254035/images/993bad9abe23f7e2186ad5f60aaee10b.jpg",
        ],
        influencerName: "Minnie Kim",
        influencerImage:
          "https://cdn.thecirqle.com/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDY9ylLT5c6L8M5YYtkm82Y2xAsf3gqOAvH7fGXkzo4YeYYpPeIxWnAyHxzhIz62iRDvHOIKIUNJyAb%2FNyB8NCaCRE2ar4apvLXVFlULS1TPKA%3D%3D",
        handle: "@itsminniekim",
        postingDate: "2021-04-10T13:16:32+00:00",
        stats: {
          impressions: null,
          reach: null,
          engagement: 0.96,
        },
      },
      {
        images: [],
        influencerName: "Gavriella Grossman",
        influencerImage:
          "https://cdn.thecirqle.com/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDZBgcJx%2Bz3p117ubABFdYZV1nfZwxXskXHWiVYeyDABV%2F4TiuC435fi0cS5Il3fo4fjmRKv%2BYqeYljPIDL3Qaa6yzo69UK7NOdkPrBvz3QdtQ%3D%3D",
        handle: "@nyfoodsharings",
        postingDate: "2021-04-03T17:16:31+00:00",
        stats: {
          impressions: 1670,
          reach: 1801,
          engagement: 2.51,
        },
      },
    ],
  };
  render() {
    return (
      <>
        <Container maxW="container.xl" p={10} bg="#232326">
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {this.state.posts.map((post) => (
              <Post post={post} />
            ))}
          </Grid>
        </Container>
      </>
    );
  }
}

export default Posts;
