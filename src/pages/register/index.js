/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
import RegisterContent from '@/components/register';
import { RegisterProvider } from '@/providers/registerProvider';

function Register() {
  return (
    <RegisterProvider>
      <RegisterContent />
    </RegisterProvider>
  );
}

export default Register;
