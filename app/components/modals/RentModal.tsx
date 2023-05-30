"use client";

import { useState } from "react";
import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModal = useRentModal();

  const [step, setStep] = useState(STEPS.CATEGORY);

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      title="WanderStay your home!"
      onSubmit={rentModal.onClose}
      actionLabel="Submit"
    />
  );
};

export default RentModal;
