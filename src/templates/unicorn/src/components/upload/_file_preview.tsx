import { XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface FilePreviewProps {
  url: string;
  handleRemove: (index: number) => void;
  index: number;
}

const myLoader = ({ src, width, quality }: { src: string; width: number; quality: number }) => {
  return src;
};

const FilePreview: React.FC<FilePreviewProps> = ({ url, handleRemove, index }) => {
  const remove = (e: any) => {
    e.stopPropagation();
    handleRemove(index);
  };
  return (
    <div className="relative h-full w-full">
      <span onClick={remove} className="absolute -right-2.5 -top-2.5 rounded-full z-10 cursor-pointer bg-cndl-light  p-1 text-xs text-cndl-negative-500">
        <XIcon size={16} />
        {/* remove */}
      </span>
      <div className="h-full rounded-xl border-2 border-cndl-primary-500 overflow-hidden flex">
        <Image fill={true} objectFit="cover" objectPosition={"center"} className="roundec-lg" src={url} alt="" />
        {/* <Image className="object-contain" loader={myLoader as any} fill={true} alt="" src={url} /> */}
      </div>
    </div>
  );
};

export default FilePreview;
