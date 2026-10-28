"use client";

export default function WhyCRO() {
  return (
    <section className="bm-why-cro-section" id="why-cro" aria-label="Why Conversion Rate Optimization & Growth Architecture">
      <div className="bm-container">
        {/* =========================================================
            HEADER: 2-Column Split (Left: 2-Line Heading, Right: Subtitle)
           ========================================================= */}
        <div className="bm-why-cro-header">
          <div className="bm-why-cro-header-left">
            <h2 className="bm-why-cro-title">
              <span className="bm-why-cro-line1">Your website is not just design.</span>
              <span className="bm-why-cro-line2">It is your growth engine.</span>
            </h2>
          </div>

          <div className="bm-why-cro-header-right">
            <p className="bm-why-cro-subtitle">
              A high-performing website does more than look good. It builds trust,
              improves user experience, supports SEO, and helps turn visitors into
              real enquiries. We focus on structure, speed, messaging, and
              usability &mdash; so your website works as a business asset, not just a
              brochure.
            </p>
          </div>
        </div>

        {/* =========================================================
            BENTO GRID LAYOUT (Compact & High-Impact)
           ========================================================= */}
        <div className="bm-cro-grid">
          {/* ---------------------------------------------------------
              COLUMN 1: THE FOUNDATION (Large Feature Card)
             --------------------------------------------------------- */}
          <article className="bm-cro-card bm-cro-card-foundation">
            <div className="bm-cro-card-top">
              <span className="bm-cro-tag">THE FOUNDATION</span>
              <span className="bm-cro-orange-dash" aria-hidden="true" />
            </div>

            <div className="bm-cro-foundation-body">
              <h3 className="bm-cro-foundation-heading">
                A great website does more than fill space. It builds trust and{" "}
                <span className="bm-cro-highlight-badge">drives action.</span>
              </h3>

              <p className="bm-cro-desc">
                From custom-coded websites to Shopify and WordPress builds, the
                goal is the same: create a clear, fast, and user-friendly experience
                that helps people understand your brand and take the next step.
              </p>
            </div>

            <div className="bm-cro-card-footer">
              <div className="bm-cro-footer-divider" aria-hidden="true" />
              <span className="bm-cro-meta-strip">
                STRATEGY &bull; UX &bull; SEO &bull; DEVELOPMENT
              </span>
            </div>
          </article>

          {/* ---------------------------------------------------------
              COLUMN 2: STACKED FACTOR 01 & FACTOR 02
             --------------------------------------------------------- */}
          <div className="bm-cro-col-stacked">
            {/* FACTOR 01: PERFORMANCE */}
            <article className="bm-cro-card bm-cro-card-factor">
              <div className="bm-cro-card-top">
                <span className="bm-cro-tag">FACTOR 01 &bull; PERFORMANCE</span>
                <span className="bm-cro-badge-pill">FAST + CLEAR</span>
              </div>

              <div className="bm-cro-factor-content">
                <h3 className="bm-cro-factor-heading">
                  Fast websites keep users engaged.
                </h3>
                <p className="bm-cro-desc">
                  Better speed, clean structure, and clear navigation improve
                  usability and help your site perform better across devices.
                </p>
              </div>

              <div className="bm-cro-mini-footer">
                <span>SPEED</span>
                <span>USABILITY</span>
              </div>
            </article>

            {/* FACTOR 02: SEO */}
            <article className="bm-cro-card bm-cro-card-factor">
              <div className="bm-cro-card-top">
                <span className="bm-cro-tag">FACTOR 02 &bull; SEO</span>
                <span className="bm-cro-badge-pill">SEARCH READY</span>
              </div>

              <div className="bm-cro-factor-content">
                <h3 className="bm-cro-factor-heading">
                  SEO starts with solid website structure.
                </h3>
                <p className="bm-cro-desc">
                  Search-friendly architecture, optimized content sections, and
                  strong technical foundations make your website easier to
                  understand for both users and search engines.
                </p>
              </div>

              <div className="bm-cro-mini-footer">
                <span>CONTENT</span>
                <span>VISIBILITY</span>
              </div>
            </article>
          </div>

          {/* ---------------------------------------------------------
              COLUMN 3: FACTOR 03 (CONVERSION TALL CARD)
             --------------------------------------------------------- */}
          <article className="bm-cro-card bm-cro-card-conversion">
            <div className="bm-cro-card-top">
              <span className="bm-cro-tag">FACTOR 03 &bull; CONVERSION</span>
              <span className="bm-cro-badge-pill">TRUST + UX</span>
            </div>

            <div className="bm-cro-conversion-body">
              <h3 className="bm-cro-conversion-heading">
                Good design supports real business growth.
              </h3>
              <p className="bm-cro-desc">
                The right content, layout, and calls to action help visitors move
                forward with confidence. That is how design, trust, and conversion
                work together.
              </p>
            </div>

            <div className="bm-cro-conversion-footer">
              <div className="bm-cro-dashed-divider" aria-hidden="true" />
              <div className="bm-cro-mini-footer">
                <span>TRUST</span>
                <span>CONVERSION</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
