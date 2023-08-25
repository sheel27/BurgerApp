import { Box, styled, Typography, Link } from "@mui/material";
import { Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80);
  width: 80%;
  height: 50vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-position: left 0px top -280px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
    text-align: center;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const Contact = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Getting in touch is easy!</Typography>
        <Text variant="h5">
          Reach out to us on Instagram
          <Link
            href="https://www.instagram.com/27_sheel_72/"
            color="inherit"
            target="_blank"
          >
            <Instagram />
          </Link>
          or send an Email
          <Link
            href="mailto:sheelparikh277@gmail.com"
            target="_blank"
            color="inherit"
          >
            <Email />
          </Link>
        </Text>
      </Wrapper>
    </Box>
  );
};

export default Contact;
