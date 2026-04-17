const addToCartBtn = document.querySelector(".add-to-cart");

if (addToCartBtn) {
  addToCartBtn.addEventListener("click", () => {
    alert("Product added to cart");
  });
}

const paymentRef = document.getElementById("payment-ref");

if (paymentRef) {
  const randomRef = "RSL-" + Math.floor(100000 + Math.random() * 900000);
  paymentRef.textContent = randomRef;
}

const nextButtons = document.querySelectorAll(".next-step");
const prevButtons = document.querySelectorAll(".prev-step");
const stepPanels = document.querySelectorAll(".step-panel");
const progressSteps = document.querySelectorAll(".progress-step");
const paymentModal = document.getElementById("payment-modal");
const paymentContinue = document.getElementById("payment-continue");
const closePaymentModal = document.getElementById("close-payment-modal");
const backFromPayment = document.getElementById("back-from-payment");

function setActiveStep(stepNumber) {
  stepPanels.forEach((panel) => panel.classList.remove("active"));
  progressSteps.forEach((step, index) => {
    step.classList.toggle("active", index === stepNumber - 1);
  });

  const targetStep = document.getElementById(`step-${stepNumber}`);
  if (targetStep) {
    targetStep.classList.add("active");
  }
}

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextStep = button.getAttribute("data-next");

    if (nextStep === "2") {
      setActiveStep(2);
    }

    if (nextStep === "3") {
      progressSteps.forEach((step) => step.classList.remove("active"));
      progressSteps[2].classList.add("active");
      if (paymentModal) {
        paymentModal.classList.add("show");
      }
    }
  });
});

prevButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const prevStep = button.getAttribute("data-prev");
    if (prevStep === "1") {
      setActiveStep(1);
    }
  });
});

if (closePaymentModal) {
  closePaymentModal.addEventListener("click", () => {
    if (paymentModal) {
      paymentModal.classList.remove("show");
    }
    setActiveStep(2);
  });
}

if (backFromPayment) {
  backFromPayment.addEventListener("click", () => {
    if (paymentModal) {
      paymentModal.classList.remove("show");
    }
    setActiveStep(2);
  });
}

if (paymentContinue) {
  paymentContinue.addEventListener("click", () => {
    alert("Order submitted for payment review.");
    if (paymentModal) {
      paymentModal.classList.remove("show");
    }
    setActiveStep(1);
  });
}

if (paymentModal) {
  paymentModal.addEventListener("click", (e) => {
    if (e.target === paymentModal) {
      paymentModal.classList.remove("show");
      setActiveStep(2);
    }
  });
}