import { Box, Divider, Stack, Typography } from "@mui/material";

export default function CircleComponent() {
  return (
    <Box my={7}>
      <Divider sx={{ bgcolor: "#8A8A8A", my: 5, mt: 20 }} />
      <Box mb={8}>
        <Typography
          variant="p"
          sx={{
            color: "whitesmoke",
            textTransform: "none",
            fontSize: "17px",
            mx: "20%",

            px: 2,
            fontWeight: 500,
            fontFamily: "Roboto",
          }}
        >
          CAPABILITIES
        </Typography>{" "}
      </Box>
      <Box
        sx={{
          height: 600,
          borderRadius: 12,
          // border: "1px solid #8A8A8A",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            ".typo-subheading": {
              fontWeight: 600,
              fontFamily: "Montserrat",
              // maxWidth: "10%",
              fontSize: { md: "30px", xs: "20px" },
              textAlign: "center",
              zIndex: 10,
            },
            ".heading": {
              fontWeight: 600,
              fontFamily: "Montserrat",
              // maxWidth: "40%",
              fontSize: { md: "60px", xs: "35px" },
              lineHeight: { md: "60px", xs: "40px" },
              textAlign: "center",
              zIndex: 10,
            },
          }}
        >
          <Stack>
            <Typography variant="p" className="typo-subheading">
              Click &
            </Typography>
            <Typography variant="p" className="typo-subheading">
              Drag
            </Typography>
            <Typography variant="p" className="heading">
              PROJECT TYPES I
            </Typography>
            <Typography variant="p" className="heading">
              SPECIALIZE IN
            </Typography>
          </Stack>
        </Box>
        {/* <Box
          sx={{
            zIndex: -1,
            height: 150,
            width: 150,
            border: "1px solid #8A8A8A",
            borderRadius: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ".typo": {
              fontFamily: "Montserrat ",
            },
          }}
        >
          <Typography variant="p" className="typo">
            hello
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
}
