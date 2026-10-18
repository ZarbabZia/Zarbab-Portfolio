import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ExternalLink } from 'lucide-react';
import { UpworkProfile } from '../types';
import { UpworkProfilePlaceholder } from './placeholders/UpworkProfilePlaceholder';

interface LightboxModalProps {
  profile: UpworkProfile | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ profile, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imgError, setImgError] = useState(false);

  // Close on Escape & Prevent Background Scrolling
  useEffect(() => {
    if (!profile) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Reset zoom & error state when profile changes
    setZoomLevel(1);
    setImgError(false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [profile, onClose]);

  if (!profile) return null;

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  const hasRealScreenshot = Boolean(profile.screenshot && !imgError);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Screenshot view for ${profile.title}`}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#0F172A] border border-[#263246] rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lightbox Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#263246] bg-[#111827]">
          <div className="min-w-0 pr-4">
            <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] truncate">
              {profile.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-[#94A3B8] mt-0.5">
              <span className="text-[#22D3EE] font-medium">{profile.category}</span>
              {profile.reportedStatus && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#3B82F6]">{profile.reportedStatus}</span>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Zoom Controls */}
            {hasRealScreenshot && (
              <div className="hidden sm:flex items-center bg-[#1E293B] border border-[#334155] rounded-lg p-0.5">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  aria-label="Zoom out screenshot"
                  className="p-1.5 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#334155] rounded transition-colors"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleResetZoom}
                  aria-label="Reset screenshot zoom"
                  className="px-2 py-1 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                >
                  {Math.round(zoomLevel * 100)}%
                </button>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  aria-label="Zoom in screenshot"
                  className="p-1.5 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#334155] rounded transition-colors"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleResetZoom}
                  aria-label="Reset zoom to 100%"
                  className="p-1.5 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#334155] rounded transition-colors"
                  title="Reset zoom"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Visit Profile Action */}
            <a
              href={profile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-colors whitespace-nowrap"
            >
              <span className="hidden sm:inline">Visit Profile</span>
              <span className="sm:hidden">Open</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal dialog"
              className="p-2 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B] rounded-lg border border-transparent hover:border-[#334155] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Lightbox Content Viewer (Scrollable & Zoomable) */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-[#080B14]/90 flex items-center justify-center min-h-[320px]">
          {hasRealScreenshot ? (
            <div
              className="transition-transform duration-200 origin-top flex items-center justify-center max-w-full"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={profile.screenshot}
                alt={profile.placeholderAlt}
                onError={() => setImgError(true)}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg border border-[#263246] shadow-xl"
              />
            </div>
          ) : (
            <div className="w-full max-w-2xl">
              <UpworkProfilePlaceholder
                title={profile.title}
                category={profile.category}
                profileUrl={profile.profileUrl}
                isLightbox={true}
              />
            </div>
          )}
        </div>

        {/* Discreet Notice Footer */}
        <div className="px-5 py-3 border-t border-[#263246] bg-[#0F172A] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#94A3B8] gap-2">
          <span>
            {hasRealScreenshot
              ? 'Profile Screenshot · Upwork Profile Management Portfolio'
              : 'Screenshot placeholder active · Configure real screenshot in data/portfolioData.ts'}
          </span>
          <span className="text-[#64748B] text-center sm:text-right">
            Press <kbd className="px-1.5 py-0.5 rounded bg-[#1E293B] border border-[#334155] text-white">Esc</kbd> or click outside to close
          </span>
        </div>
      </div>
    </div>
  );
};
