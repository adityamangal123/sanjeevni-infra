const inquiryForm = document.querySelector("[data-inquiry-form]");
const statusText = document.querySelector("[data-form-status]");

if (inquiryForm) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(inquiryForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    const subject = `Inquiry from ${name} - ${service}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0AMessage: ${message}`;
    const link = `mailto:info@sanjeevniinfra.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = link;
    if (statusText) {
      statusText.textContent = "Your email app has been opened. If not, write to info@sanjeevniinfra.com.";
    }
    inquiryForm.reset();
  });
}
