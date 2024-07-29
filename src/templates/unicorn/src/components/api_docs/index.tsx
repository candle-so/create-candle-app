"use client";

import { useEffect, useRef, useState } from "react";
import { DocResource } from "./doc_resource";
import { DocMenu } from "./doc_menu";
import { DocSection } from "./doc_section_layout";
// import FullModal from "@/_components/modal/full.modal";
// import { DocsContext } from "@/context/docs.context";
// import { ModalContext } from "@/context/modals.context";
// import { IModal } from "modal-interface";
// import { ToastContext } from "@/context/toast.context";
// import { IToast } from "toast-interface";
// import CndlToast from "../toast";
import { convertMdToHtml } from "@/lib/md-to-html";
import { convertURLEncodedToPlusEncoded } from "@/lib/anchor_helpers";

export const APIDocs = ({ docs, guides }: { docs: any; guides: any }) => {
  const docSectionRef = useRef<HTMLDivElement>(null);

  const [pageHash, setPageHash] = useState<string>("");

  const docsContextValue = { pageHash, setPageHash };

  useEffect(() => {
    window.location.hash = pageHash;
  }, [pageHash]);

  return (
    <div className="relative rounded-sm text-sm tracking-wide text-cndl-dark">
      <div className="relative w-full md:flex md:h-screen">
        <div className="md:inherit sticky top-0 md:h-full md:max-w-xs md:overflow-auto">
          <DocMenu docs={docs} guides={guides} />
        </div>
        <div className="h-full flex-1 md:overflow-auto" ref={docSectionRef}>
          {guides.map((base: any, i: number) => (
            <div key={i} className="space-y-4 pt-8" id={convertURLEncodedToPlusEncoded(base.label)}>
              <DocSection h1={base.label}>
                <div className="max-w-2xl space-y-2">
                  <div className="cndl-docs-text" dangerouslySetInnerHTML={{ __html: convertMdToHtml(base.description) }}></div>
                </div>
                <div className=""></div>
              </DocSection>
            </div>
          ))}
          {docs.documentation.map((doc: any, i: number) => docSectionRef && <DocResource key={i} doc={doc} docSectionRef={docSectionRef} />)}
        </div>
      </div>
    </div>
  );
};
