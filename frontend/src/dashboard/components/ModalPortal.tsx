import { createPortal } from "react-dom";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ModalPortal({ children }: Props) {
  const modalRoot = document.getElementById("user-detail-modal");

  if (!modalRoot) return null;

  return createPortal(children, modalRoot);
}

export default ModalPortal;
