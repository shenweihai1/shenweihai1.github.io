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
import DEPFAST from "../profile_data/depfast-atc.pdf";
import ROLIS_SLIDES from "../profile_data/rolis-slides.pdf";
import AVATAR from "../profile_data/avatar.jpg";

// https://github.com/tiankaixie/personal-profile-template-react/blob/main/profile/src/components/Profile.js

export default function Profile() {
  const intro = (
    <Grid container spacing={3} columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
      <Grid item xs={12} md={4}>
          <Box p={1} textAlign={{ xs: "left", md: "right" }}>
            <img src={AVATAR} width="42%"/>
          </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box p={1} sx={{ textAlign: "left" }}>
          <Typography variant="h4">Weihai Shen</Typography>
          <Chip
            label="Distributed systems"
            size="small"
            color="secondary"
            variant="outlined"
          />{" "}
          <Chip label="Multi-core systems" size="small" color="primary" variant="outlined" />{" "}
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
          <br />

          <Typography color="text.secondary" variant="body1">
            Email: weihshen at cs.stonybrook.edu
          </Typography>
          <Typography color="text.secondary" variant="body1">
            Links:
              <a href="https://scholar.google.com/citations?hl=en&user=MUfiJWgAAAAJ"> Google Scholar </a>/
              <a href="https://twitter.com/WeihaiShen"> Twitter </a>/
              <a href="https://github.com/shenweihai1"> Github </a>/
              <a href="https://www.linkedin.com/in/tall-cool-13yrs/"> LinkedIn </a>
              
          </Typography>
        </Box>

        {/* <Box p={1} sx={{ textAlign: "left" }}>
          <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 2.4 }}>
            <Grid item xs={4} md={2.3}>
              <Box display="flex" sx={{ flexDirection: "row" }}>
                <Box sx={{ paddingRight: 1, paddingLeft: 0 }}>
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
                <Box sx={{ paddingRight: 1, paddingLeft: 0 }}>
                  <GitHubIcon sx={{ color: "#7b1fa2" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://github.com/shenweihai1">@shenweihai1</a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} md={2}>
              <Box display="flex" sx={{ flexDirection: "row" }}>
                <Box sx={{ paddingRight: 1, paddingLeft: 0 }}>
                  <TwitterIcon sx={{ color: "#42a5f5" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://twitter.com/WeihaiShen">@WeihaiShen</a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} md={2}>
              <Box display="flex" sx={{ flexDirection: "row" }}>
                <Box sx={{ paddingRight: 1, paddingLeft: 0 }}>
                  <LinkedInIcon sx={{ color: "#1565c0" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://www.linkedin.com/in/tall-cool-13yrs/">LinkedIn</a>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box> */}
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
            <Typography variant="caption" sx={{ fontSize: "0.85rem" }}>August 2020 - Present</Typography>
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
              <a href="http://mpaxos.com/">Shuai Mu</a>{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={1} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption" sx={{ fontSize: "0.85rem" }}>August 2018 - May 2020</Typography>
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

            <Typography variant="body2">
              <Box display="inline" color="text.secondary">
                Advisor:
              </Box>{" "}
              <a href="http://rmaciejewski.faculty.asu.edu/">Ross Maciejewski</a>{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={1} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption" sx={{ fontSize: "0.85rem" }}>
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
            <Typography variant="caption" sx={{ fontSize: "0.85rem" }}> May 2021 – Aug 2021</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>
              Software Engineer Intern{" "}
              </Box>
            </Typography>

            <Typography gutterBottom>
            NetInfra, Google, Sunnyvale, CA
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
            • Developed a prototype for 1:N networking multiplexing in Libfabric, enabling efficient communication
            between one endpoint and multiple shared queue pairs (QPs). 
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
            • Conducted comprehensive benchmarks on RDMA isolation using our RDMA-connected SmartNICs, analyzing interesting findings. 
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={1} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption" sx={{ fontSize: "0.85rem" }}> May 2021 – Aug 2021</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>
              System Research Intern{" "}
              </Box>
            </Typography>

            <Typography gutterBottom>
            Infrastructure system lab, ByteDance (Tiktok), Mountain View, CA
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
            • Designed and implemented a prototype memory allocation and tracking engine for the next-generation HSAP database system, optimizing resource utilization and system performance. 
            </Typography>
          </Box>
        </Grid>
      </Grid>


      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={1} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption" sx={{ fontSize: "0.85rem" }}> July 2014 ∼ June 2018 </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>
              Software development & data engineer{" "}
              </Box>
            </Typography>

            <Typography gutterBottom>
            ByteDance/Baidu/Ganji (acquired by 58.com), Beijing, China
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
            • Developed an intelligent ad platform by integrating multiple ad engines, managing thousands of keywords to significantly enhance user growth. (Bytedance) </Typography>
            <Typography color="text.secondary" variant="body2" gutterBottom>
            • Implemented a real-time big data analysis platform using Apache Storm, Apache Flink, Apache Spark, and HBase, delivering scalable, near-realtime statistical data to users. (Bytedance)
            <Typography color="text.secondary" variant="body2" gutterBottom></Typography>
            • Designed and implemented a robust data warehouse using Apache Hive, enabling continuous monitoring and optimization of long-term user retention rates. (Bytedance)</Typography>
            <Typography color="text.secondary" variant="body2" gutterBottom>
            • Built a big data tool to analyze application performance; delivered software solutions in PHP for the application and systems according to specific needs. (Baidu)</Typography>
            <Typography color="text.secondary" variant="body2" gutterBottom>
            • Enhanced website search engine optimization (SEO); developed PHP software solutions to meet diverse application and system needs. (Ganji)</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={1} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption" sx={{ fontSize: "0.85rem" }}>June 2016 – June 2018</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>
                Software Development & Data Engineer{" "}
              </Box>
            </Typography>

            <Typography gutterBottom>
            User growth & data team, ByteDance, Beijing
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
            Implemented different models and strategies to boost user growth; built a big-data platform that can provide users near real-time statistical information of products.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={1} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption" sx={{ fontSize: "0.85rem" }}>June 2015 – June 2016</Typography>
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
            Knowledge search team, Baidu, Beijing
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
            Built a big-data tool to analyze the performance of the iterative product; iterated products on a daily basis according to needs.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={1} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption" sx={{ fontSize: "0.85rem" }}>July 2014 – April 2015</Typography>
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
            R&D department, Ganji (acquired by 58.com), Beijing
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
            Optimized the website’s SEO; iterated products on a daily basis on requests.
            </Typography>
          </Box>
        </Grid>
      </Grid> */}
  
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
              Warbler: Speculative Distributed Transactions with Geo-Replication{" "}
              </Box>
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
            Weihai Shen, Yang Cui, Siddhartha Sen, Sebastian Angel, and Shuai Mu
            </Typography>
            <Typography gutterBottom>
              <Box display="inline" sx={{ fontStyle: "oblique" }}>
              To appear in USENIX Symposium on Operating Systems Design and Implementation (OSDI), 2025
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
                  <a href="">PDF</a>
                </Typography>
              </Box>

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
                  <a href="">
                    Source Code
                  </a>
                </Typography>
               </Box>

            </Box>
        </Box>

        <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>
              DepFast: Orchestrating Code of Quorum Systems{" "}
              </Box>
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
            Xuhao Luo, Weihai Shen, Shuai Mu, and Tianyin Xu
            </Typography>
            <Typography gutterBottom>
              <Box display="inline" sx={{ fontStyle: "oblique" }}>
              In Proceedings of the USENIX Annual Technical Conference (USENIX ATC), 2022
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
                  <a href={DEPFAST}>PDF</a>
                </Typography>
              </Box>

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
                  <a href="https://github.com/xlab-uiuc/depfast/tree/atc_ae">
                    Source Code
                  </a>
                </Typography>
               </Box>

            </Box>
          </Box>

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

              <Box
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
                  <a href="https://youtu.be/LLJAUClrsnU">Video</a>
                </Typography>
              </Box>


              <Box
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
                  <a href={ROLIS_SLIDES}>Talk</a>
                </Typography>
              </Box>

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

  const services= (
    <React.Fragment>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box
            sx={{ width: "100%", display: "flex", justifyItems: "end" }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="h4">Services</Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box p={1} sx={{ textAlign: "right" }}></Box>
        </Grid>
        <Grid item xs={12} md={5}>

        <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="body2">
              <Box >
              External Review Committee for USENIX ATC 2024{" "}
              </Box>
            </Typography>
        </Box>


        </Grid>
      </Grid>
    </React.Fragment>
  );

  const teaching= (
    <React.Fragment>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box
            sx={{ width: "100%", display: "flex", justifyItems: "end" }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="h4">Teaching</Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box p={1} sx={{ textAlign: "right" }}></Box>
        </Grid>
        <Grid item xs={12} md={5}>

        <Box p={1} sx={{ textAlign: "left" }}>
            <Typography variant="body2">
              <Box >
              Teaching Assistant on <a href="http://mpaxos.com/teaching/ds/22fa/">CSE 535: Distributed Systems, Fall 2022</a>{" "}
              </Box>
              <Box >
              Teaching Assistant on <a href="https://bsd7.cs.stonybrook.edu/~cse320/">CSE 320: Systems Fundamentals II, Spring 2021</a>{" "}
              </Box>
              <Box >
              Teaching Assistant on ISE 305: Database Design and Practice, Fall 2020{" "}
              </Box>
            </Typography>
        </Box>


        </Grid>
      </Grid>
    </React.Fragment>
  );


  return (
    <React.Fragment>
      {intro}
      {/* {education} */}
      {publications}
      {services}
      {teaching}
      {experience}
    </React.Fragment>
  );
}
