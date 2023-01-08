import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { Divider, Slider } from "@mui/material";

const tiers = [
  {
    title: "Free",
    description: [
      "✓  125 words in the Paraphraser",
      "✓  Standard and Fluency modes",
      "✓  3 synonym options",
      "✓  1 Freeze word or phrase",
      "✓  1200 words in the Summarizer",
      "X  Faster processing speed",
      "X  Advanced grammar rewrites",
      "X  Compare Modes (Desktop only)",
      "X  Plagiarism Checker*",
      "X  Tone detection",
    ],
    buttonText: "Sign up - It's Free",
    buttonVariant: "contained",
  },
  {
    title: "Premium",
    description: [
      "✓  Unlimited words in the Paraphraser",
      "✓  Standard, Fluency, Expand, Shorten, Formal, Simple, and Creative ",
      "✓  4 synonym options",
      "✓  Unlimited Freeze words and phrases",
      "✓  6000 words in the Summarizer",
      "✓  Faster processing speed",
      "✓  Advanced grammar rewrites",
      "✓  Compare Modes (Desktop only)",
      "✓  Plagiarism Checker*",
      "✓  Tone detection",
    ],
    buttonText: "Upgrade to Premium",
    buttonVariant: "contained",
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0} }}
      />
      <CssBaseline />
      <Container
        gutterBottom
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Experience the full power of QuillBot
        </Typography>
      </Container>

      <Container component="main" gutterBottom>
        <Grid container spacing={5} alignItems="center">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={6} md={6}>
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: "start", color: "#ffff" }}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    backgroundColor:
                      tier.title == "Free" ? "#499557" : "#dc9e00",
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor:
                          tier.title == "Free" ? "#499557" : "#dc9e00",
                        width: "auto",
                        borderRadius: "20px",
                        height: "40px",
                        textTransform: "capitalize",
                      }}
                      className="pricing-button"
                      fullWidth
                      variant={tier.buttonVariant}
                    >
                      {tier.buttonText}
                    </Button>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <div>
                        <Typography
                          component="li"
                          variant="subtitle1"
                          key={line}
                          className="listItem"
                        >
                          {" "}
                          
                          {line}
                        </Typography>
                        <Divider />
                      </div>
                    ))}
                  </ul>
                </CardContent>
                <CardHeader
                  title={
                    tier.title == "Free"
                      ? "No Credit Card Required"
                      : "3-Day Money-Back Guarantee"
                  }
                  titleTypographyProps={{ align: "center",fontSize: "17px" }}
                  sx={{
                    height: "45px",
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography sx={{ marginTop: "15px" }} variant="body2" align="center">
          *Scan up to 20 pages a month
        </Typography>
      </Container>

      {/* Footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
