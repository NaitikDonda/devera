"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface WebsitePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export function WebsitePreviewModal({ isOpen, onClose, url, title }: WebsitePreviewModalProps) {
  const [showFallback, setShowFallback] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      setShowFallback(false);
      setIsLoading(true);
      // Show fallback after 3 seconds if iframe doesn't load properly
      timeoutRef.current = setTimeout(() => {
        setShowFallback(true);
        setIsLoading(false);
      }, 3000);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [isOpen, url]);

  const handleIframeLoad = () => {
    // Give it a moment to ensure content is actually loaded
    setTimeout(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[90vh] w-full max-w-[1600px] overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                  <span className="text-sm text-slate-600">{url}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-devera-dark transition hover:text-devera-teal"
                  onClick={(e) => e.stopPropagation()}
                >
                  Open in new tab
                </a>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                  aria-label="Close preview"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-73px)] w-full bg-slate-50">
              {showFallback ? (
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="mb-6 rounded-full bg-devera-teal/10 p-6">
                    <ExternalLink className="h-12 w-12 text-devera-teal" />
                  </div>
                  <h3 className="text-2xl font-semibold text-devera-dark mb-3">Preview Not Available</h3>
                  <p className="max-w-md text-base text-devera-dark/70 mb-6">
                    This website has security settings that prevent it from being displayed in a preview frame. 
                    Please open it in a new tab to view the live site.
                  </p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-devera-dark px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-devera-teal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Open {title} in new tab
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <>
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                      <div className="flex flex-col items-center gap-4">
                        <div className="h-8 w-8 animate-spin rounded-full border-2 border-devera-teal border-t-transparent" />
                        <p className="text-sm text-devera-dark/60">Loading preview...</p>
                      </div>
                    </div>
                  )}
                  <iframe
                    ref={iframeRef}
                    src={url}
                    title={`Preview of ${title}`}
                    className="h-full w-full border-0"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    onLoad={handleIframeLoad}
                    style={{ display: showFallback ? 'none' : 'block' }}
                  />
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
