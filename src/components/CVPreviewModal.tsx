import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight, Download, X, Loader2 } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface Props {
  open: boolean;
  onClose: () => void;
  fileUrl: string;
}

const CVPreviewModal = ({ open, onClose, fileUrl }: Props) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(800);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const updateWidth = () =>
      setWidth(Math.min(900, window.innerWidth - 64));
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", updateWidth);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h3 className="text-sm font-semibold text-foreground">CV Preview</h3>
          <div className="flex items-center gap-2">
            {numPages > 1 && (
              <div className="flex items-center gap-1 mr-2">
                <button
                  onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                  disabled={pageNumber <= 1}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-40"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-xs text-muted-foreground tabular-nums">
                  {pageNumber} / {numPages}
                </span>
                <button
                  onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
                  disabled={pageNumber >= numPages}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-40"
                  aria-label="Next page"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
            <a
              href={fileUrl}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              <Download size={14} />
              Download
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Close preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto bg-muted/30 flex justify-center py-6">
          <Document
            file={fileUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={
              <div className="flex items-center gap-2 text-muted-foreground mt-10">
                <Loader2 className="animate-spin" size={18} /> Loading CV…
              </div>
            }
            error={
              <div className="text-sm text-destructive mt-10">
                Failed to load CV.{" "}
                <a href={fileUrl} download className="underline">
                  Download instead
                </a>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              width={width}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default CVPreviewModal;
