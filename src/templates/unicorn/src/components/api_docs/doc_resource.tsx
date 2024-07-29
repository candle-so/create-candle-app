import { useEffect, useRef } from "react";

import { DocCurl } from "./doc_curl";
import { DocEndpointParams } from "./doc_endpoint_parms";
import { DocEndpoints } from "./doc_endpoints";
import { DocResouceJSON } from "./doc_resource_json";
import { DocResouceTable } from "./doc_resource_table";
import { DocSection } from "./doc_section_layout";
import { fetchWrapper } from "@/lib/_fetch";
import { convertURLEncodedToPlusEncoded } from "@/lib/anchor_helpers";
import { CloudLightningIcon } from "lucide-react";

export const DocResource = ({ doc, docSectionRef }: any) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const openFeedbackDialog = (docsSection: string) => {
    // setFullModal({
    //   ...fullModal,
    //   title: "How can we improve this section?",
    //   description: "",
    //   width: "sm",
    //   open: true,
    //   body: <DocsFeedbackForm section={docsSection} />,
    // });
  };

  const sendYesFeedback = async (docsSection: string) => {
    await fetchWrapper({ url: "platforms/docs/feedback", method: "POST", data: { section: docsSection, message: "This section was helpful" } });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (docSectionRef.current) {
        const docSectionRect = docSectionRef.current.getBoundingClientRect();
        itemRefs.current.forEach((itemRef, index) => {
          if (itemRef) {
            const rect = itemRef.getBoundingClientRect();

            if (rect.top >= docSectionRect.top && rect.bottom <= docSectionRect.bottom) {
              // Fire off your event here for the specific index
              let _pageHash = convertURLEncodedToPlusEncoded(`${doc.resource} ${doc.endpoints[index].title}`);
            }
          }
        });
      }
    };

    if (docSectionRef.current) {
      docSectionRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (docSectionRef.current) {
        docSectionRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="space-y-4 pt-8" id={convertURLEncodedToPlusEncoded(doc.resource)}>
      <DocSection h1={doc.title}>
        <div className="space-y-5">
          <p>{doc.description}</p>
          <div className="">
            <div className="inline-block">
              <div className="flex items-center space-x-3 rounded border border-dashed border-cndl-neutral px-3 py-2">
                <div className="">
                  <CloudLightningIcon size={16} />
                </div>
                <div className="text-cndl-neutral-700">Was this helful?</div>
                <div className="flex space-x-3 font-bold">
                  <div className="cursor-pointer text-cndl-positive-500" onClick={() => sendYesFeedback(doc.title)}>
                    Yes
                  </div>
                  <div className="cursor-pointer text-cndl-negative-500" onClick={() => openFeedbackDialog(doc.title)}>
                    No
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DocEndpoints doc={doc} />
      </DocSection>

      <DocSection h2="The Object">
        <DocResouceTable data={doc.object} />
        <DocResouceJSON title={`${doc.title} Object`} data={doc.object} />
      </DocSection>

      {doc.endpoints.map((endpoint: any, i: number) => {
        return (
          <div className="" key={i} id={convertURLEncodedToPlusEncoded(`${doc.resource} ${endpoint.title}`)}>
            <DocSection h2={endpoint.title}>
              <DocEndpointParams endpoint={endpoint} />
              <div className="space-y-6">
                <DocCurl endpoint={endpoint} />
                <DocResouceJSON title="The Response" data={doc.object} />
              </div>
            </DocSection>
          </div>
        );
      })}
    </div>
  );
};
