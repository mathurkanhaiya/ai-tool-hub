import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import SEOHead from "@/components/SEOHead";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_4frz95f",
        "template_mkvb9y8",
        form.current,
        "Mc6nYv8pUSI_9LMAs"
      )
      .then(() => {
        setSubmitted(true);

        // Redirect to home after 3 seconds
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      });
  };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Free AI Tools Hub. Send us your questions, feedback, or suggestions."
      />

      <div className="container py-12 max-w-2xl">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>

        <p className="text-muted-foreground mb-8">
          Have questions or feedback? We'd love to hear from you.
        </p>

        {submitted ? (
          <div className="bg-card border rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-xl font-bold mb-2">Message Sent!</h2>
            <p className="text-muted-foreground">
              Thank you for reaching out. Redirecting to homepage...
            </p>
          </div>
        ) : (
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="bg-card border rounded-lg p-6 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                required
                name="user_name"
                type="text"
                className="w-full border rounded-lg px-4 py-2.5 bg-background"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                required
                name="user_email"
                type="email"
                className="w-full border rounded-lg px-4 py-2.5 bg-background"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full border rounded-lg px-4 py-2.5 bg-background resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default ContactPage;