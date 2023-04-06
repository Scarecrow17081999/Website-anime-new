import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { AnimeSectionPreviewCard } from "./AnimeSectionPreviewCard";
const data = {
  topAiring: [
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
  ],
  mostPopular: [
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
  ],
  favourite: [
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
  ],
  currenWatch: [
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
    {
      img: "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      title: "Attack on Titan",
    },
  ],
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AnimeSectionPreview() {
    let objTitle =Object.keys(data);
    let objData=Object.values(data);
  return (
    <div>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        {objData.length != 0
          ? objData?.map((e,i) => {
            return (
              <Item sx={{ width: "20%", padding: "0px" }}>
                <AnimeSectionPreviewCard val={e} title={objTitle[i]} />
              </Item>
            );
              
            })
          : "no data"}
      
      </Stack>
    </div>
  );
}
