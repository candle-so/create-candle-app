"use client";
import { convertURLEncodedToPlusEncoded } from "@/lib/anchor_helpers";
import { CassetteTapeIcon, MoreVerticalIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { Logo } from "../logo";

export const DocMenu = ({ docs, guides }: any) => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const _hash = window.location.hash;
  }, []);

  const showMenu = () => {
    // setFullModal({
    //   ...fullModal,
    //   open: true,
    //   title: "",
    //   description: "",
    //   body: (
    //     <div className="w-full px-6 pb-10 md:block">
    //       {guides.map((base: any, i: number) => (
    //         <div key={i} className="w-11/12 px-2 py-1 hover:bg-cndl-light">
    //           <Link
    //             onClick={() => {
    //               setPageHash(`#${base.label}`);
    //               setFullModal({ ...fullModal, open: false });
    //             }}
    //             href={`#${convertURLEncodedToPlusEncoded(base.label)}`}
    //             className={classNames("font-regular text-sm capitalize", isHash(base.label, pageHash) ? "font-extrabold" : "font-medium")}
    //           >
    //             {base.label}
    //           </Link>
    //         </div>
    //       ))}
    //       <div className="pb-2 font-bold"></div>
    //       {docs.documentation.map((doc: any, i: number) => (
    //         <div className="pt-4" key={i}>
    //           <div className="flex items-center justify-between">
    //             <div className="flex-1">
    //               <Link
    //                 onClick={() => {
    //                   setPageHash(`#${doc.resource}`);
    //                   setFullModal({ ...fullModal, open: false });
    //                 }}
    //                 href={`#${convertURLEncodedToPlusEncoded(doc.resource)}`}
    //                 className={classNames("text-md font-montserrat capitalize", isHash(doc.resource, pageHash) ? "font-extrabold" : "font-medium")}
    //               >
    //                 {doc.resource}
    //               </Link>
    //             </div>
    //             {/* <div className="w-1/7 text-right">
    //             <Icon icon="down-chevron" />
    //           </div> */}
    //           </div>
    //           <div className="space-y-1 pl-2">
    //             {doc.endpoints.map((endpoint: any, i: number) => (
    //               <div key={i} className={classNames("w-11/12 px-2 py-1 hover:bg-cndl-light", isHash(`${doc.resource} ${endpoint.title}`, pageHash) ? "bg-cndl-light" : "")}>
    //                 <Link
    //                   onClick={() => {
    //                     let _hash = `#${doc.resource} ${endpoint.title}`.replaceAll(" ", "+").toLocaleLowerCase();
    //                     setPageHash(_hash);
    //                     setFullModal({ ...fullModal, open: false });
    //                   }}
    //                   href={`#${convertURLEncodedToPlusEncoded(`${doc.resource} ${endpoint.title}`)}`}
    //                   className={classNames("font-regular text-sm", isHash(`${doc.resource} ${endpoint.title}`, pageHash) ? "font-bold" : "font-light text-cndl-neutral-700")}
    //                 >
    //                   {endpoint.title}
    //                 </Link>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   ),
    // });
  };

  return (
    <div className="relative w-full border-dashed border-cndl-neutral md:border-r">
      <div className="sticky top-0 z-50 p-4 backdrop-blur-md md:z-10">
        <div className="flex justify-between">
          <div className="flex">
            <Link href="/">
              <Logo />
            </Link>
            <div className="pl-2 font-bold text-cndl-accent-500">
              <Link href="/docs">api</Link>
            </div>
          </div>
          <div className="md:hidden" onClick={showMenu}>
            <MoreVerticalIcon />
          </div>
        </div>
      </div>
      <div className="hidden w-full px-6 pb-10 md:block">
        {guides.map((base: any, i: number) => (
          <div key={i} className="w-11/12 px-2 py-1 hover:bg-cndl-light">
            <Link
              onClick={() => {
                // setPageHash(`#${base.label}`);
              }}
              href={`#${convertURLEncodedToPlusEncoded(base.label)}`}
              className="font-regular text-sm capitalize font-medium"
            >
              {base.label}
            </Link>
          </div>
        ))}

        <div className="pb-2 font-bold"></div>
        {docs.documentation.map((doc: any, i: number) => (
          <div className="pt-4" key={i}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Link
                  onClick={() => {
                    // setPageHash(`#${doc.resource}`);
                  }}
                  href={`#${convertURLEncodedToPlusEncoded(doc.resource)}`}
                  className="text-md font-montserrat capitalize"
                >
                  {doc.resource}
                </Link>
              </div>
              {/* <div className="w-1/7 text-right">
                <Icon icon="down-chevron" />
              </div> */}
            </div>
            <div className="space-y-1 pl-2">
              {doc.endpoints.map((endpoint: any, i: number) => (
                <div key={i} className="w-11/12 px-2 py-1 hover:bg-cndl-light">
                  <Link
                    onClick={() => {
                      let _hash = `#${doc.resource} ${endpoint.title}`.replaceAll(" ", "+").toLocaleLowerCase();
                      // setPageHash(_hash);
                    }}
                    href={`#${convertURLEncodedToPlusEncoded(`${doc.resource} ${endpoint.title}`)}`}
                    className="font-regular text-smfont-light text-cndl-neutral-700"
                  >
                    {endpoint.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 hidden w-full border-t border-dashed border-cndl-accent-500p-4 backdrop-blur-lg md:block">
        <div className="flex items-center space-x-3 text-xs text-cndl-dark">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cndl-light text-cndl-dark">
            <CassetteTapeIcon size={20} />
          </div>
          <span className="font-regular text-cndl-neutral-700">Now in private beta</span>
        </div>
        {process.env.NODE_ENV && (
          <div className="flex items-center space-x-2 px-2 pt-2 text-xs text-cndl-neutral-600">
            <div className="">
              <span className="font-bold text-cndl-neutral-700">{docs.completion.completed}</span>/<span>{docs.completion.total}</span>
            </div>
            <div className="italic">({docs.completion.percentage}%) complete</div>
          </div>
        )}
      </div>
    </div>
  );
};
