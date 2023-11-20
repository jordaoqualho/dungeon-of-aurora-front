import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const StyledToast = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    border-radius: 10px;
    margin: 20px;
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;
