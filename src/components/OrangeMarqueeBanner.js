"use client";

const tickerItems = [
  "CUSTOM WEBSITES",
  "BUILT FOR PERFORMANCE",
  "LMS DEVELOPMENT",
  "SCALABLE SOLUTIONS",
  "CRM DEVELOPMENT",
  "SMARTER WORKFLOWS",
  "FULL-STACK DEVELOPMENT",
];

export default function OrangeMarqueeBanner() {
  return (
    <section
      className="bm-orange-ticker-section"
      aria-label="Core Capabilities and Custom Solutions"
    >
      <div className="bm-orange-ticker-container">
        <div className="bm-orange-ticker-track">
          {/* Duplicate 1 */}
          <div className="bm-orange-ticker-group">
            {tickerItems.map((item, index) => (
              <span key={`ticker-1-${index}`} className="bm-orange-ticker-item">
                <span className="bm-ticker-text">{item}</span>
                <span className="bm-ticker-sparkle" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>

          {/* Duplicate 2 (for 100% seamless infinite loop without backward jumps) */}
          <div className="bm-orange-ticker-group" aria-hidden="true">
            {tickerItems.map((item, index) => (
              <span key={`ticker-2-${index}`} className="bm-orange-ticker-item">
                <span className="bm-ticker-text">{item}</span>
                <span className="bm-ticker-sparkle" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>

          {/* Duplicate 3 (extra track to ensure flawless density on ultra-wide 4K screens) */}
          <div className="bm-orange-ticker-group" aria-hidden="true">
            {tickerItems.map((item, index) => (
              <span key={`ticker-3-${index}`} className="bm-orange-ticker-item">
                <span className="bm-ticker-text">{item}</span>
                <span className="bm-ticker-sparkle" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>

          {/* Duplicate 4 */}
          <div className="bm-orange-ticker-group" aria-hidden="true">
            {tickerItems.map((item, index) => (
              <span key={`ticker-4-${index}`} className="bm-orange-ticker-item">
                <span className="bm-ticker-text">{item}</span>
                <span className="bm-ticker-sparkle" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
