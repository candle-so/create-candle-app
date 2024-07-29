import { BookOpenCheck, GithubIcon } from "lucide-react";
import { Terminal } from "./terminal";
import Link from "next/link";

export const HowToCode = () => {
  return (
    <div className="bg-gradient-to-br from-cndl-dark via-cndl-primary-900 to-cndl-secondary-200 text-cndl-light space-y-20 md:space-y-32 py-16 md:py-32">
      <div className="container max-w-5xl md:flex justify-between space-y-5 md:space-y-0">
        <div className="flex-1 max-w-lg order-first md:order-last">
          <Terminal>
            <pre className="text-xs md:text-md">$ npm install create-candle-app</pre>
          </Terminal>
        </div>
        <div className="md:w-1/3 md:space-y-4 space-y-3 px-2 md:px-0">
          <h3 className="md:text-xl font-bold text-lg">Zero to MVP in 1 line</h3>
          <p className="text-sm md:text-md">Use create-candle-app to bootstrap your ideas with one line</p>
          <Link href="https://github.com/candle-so/create-candle-app" className="flex text-cndl-secondary-200 space-x-4 items-center">
            <span>
              <GithubIcon size={16} />
            </span>
            <span className="text-sm md:text-md">Review On Github</span>
          </Link>
        </div>
      </div>

      <div className="container max-w-5xl md:flex justify-between space-y-5 md:space-y-0">
        <div className="flex-1 max-w-lg order-first md:order-last">
          <Terminal>
            <pre className="text-xs md:text-md">
              {`import Candle from "@candle-so/node";
const candle = Candle.init({ api_key: process.env.CANDLE_API_KEY });

const response = await candle.users.createUser({
    email: "johnny@acme.co",   
    username: "jmoney",   
    bio: "I am a software engineer."
});`}
            </pre>
          </Terminal>
        </div>
        <div className="md:w-1/3 md:space-y-4 space-y-3 px-2 md:px-0">
          <h3 className="md:text-xl font-bold text-lg">Candle API will to the heavy lifting.</h3>
          <p className="text-sm md:text-md">Build with any language or use our NodeJS SDK. Support for other languages coming soon</p>
          <Link href="/docs" className="flex text-cndl-secondary-200 space-x-4 items-center">
            <span>
              <BookOpenCheck size={16} />
            </span>
            <span className="text-sm md:text-md">Check out our Docs.</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
