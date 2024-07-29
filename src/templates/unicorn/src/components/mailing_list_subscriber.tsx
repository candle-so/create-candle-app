"use client";

// import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";

export const MailingListSubscriber = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const subscribeToNewsletter = async () => {
    const formBody = `firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&email=${encodeURIComponent(email)}`;

    // https://app.loops.so/api/newsletter-form/clu0oia5z00kohawrwehpef93
    let response = await fetch("https://app.loops.so/api/newsletter-form/clu0oia5z00kohawrwehpef93", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    });

    if (response.status < 300) {
      let result = await response.json();
      setIsSubscribed(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      // setToasts([...toasts, { status: "success", message: "Thank you for subscribing!" }]);
      return result;
    }
    let error = await response.json();
    // setToasts([...toasts, { status: "error", message: "Something went wrong subscribing to the newsletter" }]);
    setIsSubscribed(false);
  };

  return (
    <section className="text-center bg-gradient-to-tr container from-cndl-primary-200 via-cndl-secondary-100 to-cndl-secondary-200 py-16">
      <div className="max-w-xl m-auto space-y-6">
        <h3 className="text-3xl font-pacifico">Updates right to your inbox</h3>
        <p className="text-cndl-neutral-900">Every week we announces updates on new features, new products, and more.</p>
        {isSubscribed && <p className="text-md mx-auto mt-6 max-w-xl leading-8 text-cndl-dark">Thank you for subscribing!</p>}
        {!isSubscribed && (
          <div className="space-y-4 max-w-sm m-auto">
            <div className="flex items-center space-x-4 whitespace-nowrap rounded-sm">
              <div className="w-1/2">
                <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="w-1/2">
                <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>

            <Input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button variant="default" className="w-full" onClick={subscribeToNewsletter}>
              Subscribe
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
