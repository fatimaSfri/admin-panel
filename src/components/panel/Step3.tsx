// Step1.tsx
import { Button, Box } from '@mui/material';

interface Props {
  goToStep: (step: number) => void;
}

const Step1 = ({ goToStep }: Props) => {
  return (
    <Box textAlign="center" p={4}>
      <h2>مرحله ۱</h2>
      <Button variant="contained" onClick={() => goToStep(1)}>
        برو به مرحله 4
      </Button>
    </Box>
  );
};

export default Step1;