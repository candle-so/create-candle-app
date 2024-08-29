import React, { useState } from "react";
import Candle from "@candle-so/node";
import { getAuthTokens } from "../../lib/_cookies";
import FilePreview from "./_file_preview";
import { cn } from "@/lib/utils";

interface DragAndDropProps {
  folder: string;
  field: any;
  onRemove: (index: number) => void;
  onUpload: (value: any) => void;
}

const Uploader: React.FC<DragAndDropProps> = ({ field, onUpload, onRemove }) => {
  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });
  let { accessToken } = getAuthTokens();
  // const { toasts, setToasts } = useContext(ToastContext);
  const [previewMedia, setPreviewMedia] = useState<any>(field.defaultValue || []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const input = document.createElement("input");
    input.type = "file";
    input.name = "media";
    input.accept = "image/*, video/*, text/*, .csv, application/vnd.ms-excel, application/pdf";
    input.multiple = true;
    input.click();
    input.onchange = () => {
      let files = [...Array.from(input.files!)];
      // setPreviewMedia([...previewMedia, ...files.map((file: any) => "empty")]);
      doMediaUpload(files);
    };
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleRemove = (index: number) => {
    let _previewMedia = [...previewMedia].filter((_, i) => i !== index);
    setPreviewMedia(_previewMedia);
    onRemove(index);
  };

  const doMediaUpload = async (files: any) => {
    if (!files) return;
    let media: any[] = [];
    // let bucketName = "profiles";

    for (let i = 0; i < files.length; i++) {
      const { error, data } = await candle.utils.uploadMedia(files[i], accessToken);
      if (error) return;
      setPreviewMedia([...previewMedia, data.url]);
      media.push(data.url);
    }
    return onUpload(media);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    let files = [...Array.from(e.dataTransfer.files)];
    doMediaUpload(files);
  };

  return (
    <div>
      <div className="flex">
        <div className="flex-1">
          <label className="text-sm font-medium" htmlFor={field.name}>
            {field.label}
          </label>
        </div>
      </div>

      <div className={cn(previewMedia.length === 0 ? "" : "grid grid-cols-3 gap-6")}>
        {previewMedia.map((url: any, i: number) => {
          return (
            <div key={i} className="relative h-full w-full rounded bg-cndl-neutral-100">
              <FilePreview url={url} handleRemove={handleRemove} index={i} />
            </div>
          );
        })}
        <div onDrop={handleDrop} onClick={handleClick} onDragOver={handleDragOver} className="flex items-center justify-center h-36 w-36 rounded-xl bg-cndl-primary-50 ring-2 ring-cndl-primary-500 ring-offset-4 cursor-pointer">
          <p className="text-center text-cndl-primary-400 font-bold text-xs">{field.placeholder}</p>
        </div>
      </div>
    </div>
  );
};

export default Uploader;
