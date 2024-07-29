import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  {
    question: "What is Candle?",
    answer:
      "Candle is an infrastructure solution for building and operating marketplaces. It offers a REST API and a dashboard experience, providing developers with tools to create marketplaces, communities, talent agencies, job boards, services agencies, payment portals, and real estate tech.",
  },
  {
    question: "What makes Candle unique?",
    answer: "Candle simplifies the creation of platforms that require complex payment workflows and provides a comprehensive solution for managing transactions and user authentication, making it highly versatile for various applications.",
  },
  {
    question: "How does Candle handle user authentication?",
    answer: "For sellers, Candle facilitates authentication to ensure they can get paid via the platform. Buyers are authenticated directly through the Candle API, ensuring a seamless and secure experience for both parties.",
  },
  {
    question: "How does Candle manage compliance and security?",
    answer: "By leveraging Stripe Connect [Standard], Candle ensures compliance with KYC (Know Your Customer) and AML (Anti-Money Laundering) regulations, managing the heavy lifting to provide a secure and user-friendly experience for handling payments and user data.",
  },
  {
    question: "What types of applications can I build with Candle?",
    answer:
      "With Candle, you can build a variety of applications such as marketplaces, communities, talent agencies, talent marketplaces, job boards, services agencies, payment portals, and real estate technology platforms. It is highly versatile and suitable for any platform that can benefit from streamlined payment processes.",
  },
  {
    question: "What is create-candle-app?",
    answer:
      "create-candle-app is a utility that helps developers quickly set up a NextJS 14 marketplace application using Candle. It simplifies the initial setup process, allowing developers to focus on building their unique marketplace features. With create-candle-app, developers can easily set up their marketplace with a single command. See the documentation for more details.",
  },
  {
    question: "Is there an SDK for Candle?",
    answer: "`@candle-so/node` is the Node.js SDK provided by Candle. It enables developers to integrate Candle's API into their Node.js applications, offering a seamless way to build and manage marketplaces. Support for more languages and SDKs can be added in the future. See the documentation for more details.",
  },
  {
    question: "Where can I find Candle's API documentation?",
    answer: "Candle's API documentation is available at https://candle.so/docs. It contains detailed information on how to use the API, including endpoints, authentication, and example requests.",
  },
  {
    question: "How does Candle handle payments?",
    answer: "Candle facilitates secure and efficient payment processing between multiple parties, ensuring that funds are transferred correctly and compliantly to the respective accounts.",
  },
  {
    question: "How do sellers get paid through Candle?",
    answer: "Sellers get paid through Candle via secure payment processing methods that ensure funds are transferred efficiently to the sellers' accounts.",
  },
  {
    question: "Can buyers also be sellers on Candle?",
    answer: "Yes, users on Candle can be both buyers and sellers. The platform supports a single login flow for both roles, making it easy for users to manage their activities on the marketplace.",
  },
  {
    question: "Does Candle support multi-party transactions?",
    answer: "Yes, Candle supports multi-party transactions. This feature is particularly useful for platforms where multiple buyers pool their money or where revenue needs to be shared among multiple sellers.",
  },
  {
    question: "Is there a sandbox environment for testing?",
    answer: "Yes, Candle provides a sandbox environment for testing purposes. Developers can use this environment to test their integrations and ensure everything works correctly before going live.",
  },
  {
    question: "How does Candle ensure the security of transactions?",
    answer: "Candle ensures the security of transactions by complying with industry standards and regulations, providing robust security measures to protect payment data and user information.",
  },
  {
    question: "What kind of support does Candle offer?",
    answer: "Candle offers comprehensive support through documentation, community forums, and direct support channels - team@candle.so. Developers can access resources and get help with any issues they encounter while using Candle.",
  },
];

export const FAQs = () => {
  return (
    <div className="py-16">
      <div className="container max-w-5xl m-auto space-y-6">
        <div className="space-y-4 max-w-lg">
          <h3 className="text-3xl font-pacifico">Frequently Asked Questions</h3>
          <p>
            Anything you need to know. If we left something out, drop us a line at{" "}
            <Link className="text-cndl-accent-500 font-bold" href="mailto:team@candle.so">
              team@candle.so
            </Link>
          </p>
        </div>
        <div className="rounded-xl shadow-lg p-4">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((question) => (
              <AccordionItem value={question.question} key={question.question}>
                <AccordionTrigger className="text-md font-bold text-left">{question.question}</AccordionTrigger>
                <AccordionContent className="text-md text-cndl-neutral-800 text-left">{question.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
