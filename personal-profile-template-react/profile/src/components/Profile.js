import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import DescriptionIcon from "@mui/icons-material/Description";
import LinkIcon from "@mui/icons-material/Link";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import CodeIcon from "@mui/icons-material/Code";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Chip from "@mui/material/Chip";
import ROLIS from "../profile_data/rolis-eurosys22.pdf";

// https://github.com/tiankaixie/personal-profile-template-react/blob/main/profile/src/components/Profile.js

export default function Profile() {
  const intro = (
    <Grid container spacing={3}>
      <Grid item xs={0} md={4}>
        <Box sx={{ width: "100%", display: "flex", justifyItems: "end" }}></Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box p={1} sx={{ textAlign: "left" }}>
          <Typography variant="h4">Weihai Shen</Typography>
          <Typography color="text.secondary" sx={{ fontSize: 18 }} gutterBottom>
            weihai.shen@stonybrook.edu
          </Typography>{" "}
          <Typography color="text.secondary" sx={{ fontSize: 18 }} gutterBottom>
            
          </Typography>{" "}
          <Chip
            label="Distributed systems"
            size="small"
            color="secondary"
            variant="outlined"
          />{" "}
          <Chip label="Multi-core systems" size="small" color="primary" variant="outlined" />{" "}
          <Chip
            label="Fault tolerance"
            size="small"
            color="success"
            variant="outlined"
          />
          <br />
          <br />

          <Typography color="text.secondary" variant="body1">
            I am currently a Ph.D. student in computer science at{" "}
            <a href="https://www.stonybrook.edu/"> Stony Brook University</a>. My
            research is distributed systems and multi-core systems.
          </Typography>
          <br />
          <Typography color="text.secondary" variant="body1">
            At Stony Brook University, I work with Dr.{" "}
            <a href="http://mpaxos.com/">Shuai Mu</a>{" "}
            as a member of the
            <a href="https://github.com/stonysystems"> stonysystems</a>.
          </Typography>
        </Box>
        <Box p={1} sx={{ textAlign: "left" }}>
          <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 2 }}>
            <Grid item xs={4} md={2.5}>
              <Box display="flex" sx={{ flexDirection: "row" }}>
                <Box sx={{ paddingRight: 1, paddingLeft: 1 }}>
                  <SchoolIcon fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://scholar.google.com/citations?hl=en&user=MUfiJWgAAAAJ">
                    Google Scholar
                  </a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} md={2}>
              <Box display="flex" sx={{ flexDirection: "row" }}>
                <Box sx={{ paddingRight: 1, paddingLeft: 1 }}>
                  <GitHubIcon sx={{ color: "#7b1fa2" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://github.com/shenweihai1">@shenweihai1</a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} md={2}>
              <Box display="flex" sx={{ flexDirection: "row" }}>
                <Box sx={{ paddingRight: 1, paddingLeft: 1 }}>
                  <TwitterIcon sx={{ color: "#42a5f5" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://twitter.com/WeihaiShen">@WeihaiShen</a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} md={2}>
              <Box display="flex" sx={{ flexDirection: "row" }}>
                <Box sx={{ paddingRight: 1, paddingLeft: 1 }}>
                  <LinkedInIcon sx={{ color: "#1565c0" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://www.linkedin.com/in/tall-cool-13yrs/">LinkedIn</a>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider variant="middle" />
      </Grid>
    </Grid>
  );

  const education = (
    <React.Fragment>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box
            sx={{ width: "100%", display: "flex", justifyItems: "end" }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="h4">Education </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={1} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption">August 2020 - Present</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>Ph.D. in Computer Science </Box>
            </Typography>

            <Typography gutterBottom>
              Stony Brook University, NY
            </Typography>

            <Typography variant="body2">
              <Box display="inline" color="text.secondary">
                Advisor:
              </Box>{" "}
              Shuai Mu
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={1} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption">August 2018 - May 2020</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>M.S. in Computer Science</Box>
            </Typography>
            <Typography gutterBottom>
              Arizona State University, AZ
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={1} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption">
              September 2010 - July 2014
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>B.S. in Geographic Information System</Box>
            </Typography>
            <Typography variant="body1" gutterBottom>
            Nanjing University of Posts and Telecommunications, Nanjing, China
            </Typography>
          </Box>
          {/* <Divider variant="middle" /> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );

  const experience = (
    <React.Fragment>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box
            sx={{ width: "100%", display: "flex", justifyItems: "end" }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="h4">Experience </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={1} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption"> May 2021 – Aug 2021</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>
              Research Intern{" "}
              </Box>
            </Typography>

            <Typography gutterBottom>
            ByteDance (Infrastructure System Lab), Mountain View, CA
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
            Implemented memory allocation & memory tracking for the next generation database system.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={1} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption">June 2016 – June 2018</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>
                Software Development Engineer & Data Engineer{" "}
              </Box>
            </Typography>

            <Typography gutterBottom>
            ByteDance (User growth team & Data team Beijing), Beijing
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
            Implemented different models and strategies to boost user growth; 
            built a realtime big data analysis platform that can provide users real-time statistical information on a large scale.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={1} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption">June 2015 – June 2016</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>
              Software Development Engineer{" "}
              </Box>
            </Typography>

            <Typography gutterBottom>
            Baidu (Knowledge search team), Beijing
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
            Built a big-data tool to analyze the performance of the iterative product; implemented iterative development on a daily basis according to needs.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={1} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption">July 2014 – April 2015</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>
              Software Development Engineer{" "}
              </Box>
            </Typography>

            <Typography gutterBottom>
            Ganji (Real estate team), Beijing
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
            Optimized the website’s SEO; implemented iterative development on a daily basis according to needs.
            </Typography>
          </Box>
        </Grid>
      </Grid>
  
    </React.Fragment>
  );

  const publications = (
    <React.Fragment>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box
            sx={{ width: "100%", display: "flex", justifyItems: "end" }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="h4">Publications </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box p={1} sx={{ textAlign: "right" }}></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>
              Rolis: a software approach to efficiently replicating multi-core transactions{" "}
              </Box>
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
            Weihai Shen, Ansh Khanna, Sebastian Angel, Siddhartha Sen, and Shuai Mu
            </Typography>
            <Typography gutterBottom>
              <Box display="inline" sx={{ fontStyle: "oblique" }}>
              In Proceedings of ACM European Conference on Computer Systems (EuroSys), 2022
              </Box>
            </Typography>
            <Box
              display="flex"
              sx={{ flexDirection: "row", justifyContent: "start" }}
            >
              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <DescriptionIcon sx={{ color: "#c62828" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href={ROLIS}>PDF</a>
                </Typography>
              </Box>
              {/* <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <YouTubeIcon sx={{ color: "#3c3c3c" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://youtu.be/WVJ3-UXNxPk">Video</a>
                </Typography>
              </Box> */}

              {/* <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <SlideshowIcon fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="#">Talk</a>
                </Typography>
              </Box> */}

              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <CodeIcon fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://github.com/stonysystems/rolis">
                    Source Code
                  </a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

    </React.Fragment>
  );

  return (
    <React.Fragment>
      {intro}
      {education}
      {publications}
      {experience}
    </React.Fragment>
  );
}
