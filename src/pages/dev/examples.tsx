import { Box, Container, Stack, Typography } from '@mui/material';

export default function ExamplesPage() {
  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="center">
        <Stack direction="column" spacing={5}>
          <Typography variant="h1" align="center" paragraph>
            EXAMPLES
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
