import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";
import Post from "./Post";

const data = [
  {
    title: "Helen Ibrahim",
    date: "April 14, 2022",
    img: require("../imgs/pexels-gustavo-fring-8770585.jpg"),
    avatar: "HI",
  },
  {
    title: "Saeed Akel",
    date: "April 1, 2022",
    img: require("../imgs/pexels-photo-708440.jpeg"),
    avatar: "SA",
  },
  {
    title: "Darena Ibrahim",
    date: "April 5, 2022",
    img: require("../imgs/pexels-photo-9713274.jpeg"),
    avatar: "DI",
  },
  {
    title: "Julia Role",
    date: "April 12, 2022",
    img: require("../imgs/pexels-photo-1638324.jpeg"),
    avatar: "JR",
  },
  {
    title: "Jad Psiphered",
    date: "April 10, 2022",
    img: require("../imgs/pexels-photo-804009.jpeg"),
    avatar: "JP",
  },
  {
    title: "Adam Lam",
    date: "April 7, 2022",
    img: require("../imgs/pexels-photo.jpg"),
    avatar: "AL",
  },
  {
    title: "Leli Morad",
    date: "April 2, 2022",
    img: require("../imgs/pexels-photo-5054092.jpeg"),
    avatar: "LM",
  },
];

function Feed() {
  const [loading, setLoading] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          {data.map((post) => (
            <Post {...post} />
          ))}
        </>
      )}
    </Box>
  );
}

export default Feed;
