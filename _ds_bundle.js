/* @ds-bundle: {"format":4,"namespace":"IdeaPitchSKTDesignSystem_14362e","components":[{"name":"ChipRow","sourcePath":"components/blocks/ChipRow.jsx"},{"name":"EmphasisBand","sourcePath":"components/blocks/EmphasisBand.jsx"},{"name":"EntityBox","sourcePath":"components/blocks/EntityBox.jsx"},{"name":"FlowArrow","sourcePath":"components/blocks/FlowArrow.jsx"},{"name":"LabelChip","sourcePath":"components/blocks/LabelChip.jsx"},{"name":"SectionCard","sourcePath":"components/blocks/SectionCard.jsx"},{"name":"Timeline","sourcePath":"components/blocks/Timeline.jsx"},{"name":"TrackArrow","sourcePath":"components/blocks/TrackArrow.jsx"},{"name":"GoverningHeadline","sourcePath":"components/structure/GoverningHeadline.jsx"},{"name":"SectionDivider","sourcePath":"components/structure/SectionDivider.jsx"},{"name":"SlideFooter","sourcePath":"components/structure/SlideFooter.jsx"},{"name":"SlideFrame","sourcePath":"components/structure/SlideFrame.jsx"},{"name":"SlideHeader","sourcePath":"components/structure/SlideHeader.jsx"},{"name":"TakeawayBar","sourcePath":"components/structure/TakeawayBar.jsx"},{"name":"TitleSlide","sourcePath":"components/structure/TitleSlide.jsx"}],"sourceHashes":{"components/blocks/ChipRow.jsx":"eaf118fec2bf","components/blocks/EmphasisBand.jsx":"92dc8892bdf3","components/blocks/EntityBox.jsx":"7912313b356d","components/blocks/FlowArrow.jsx":"93a91f3b01f7","components/blocks/LabelChip.jsx":"55e85bc8a5c4","components/blocks/SectionCard.jsx":"4c480c4e79ab","components/blocks/Timeline.jsx":"f9fda1c2c881","components/blocks/TrackArrow.jsx":"8d4e27083a46","components/structure/GoverningHeadline.jsx":"a3ca925afaac","components/structure/SectionDivider.jsx":"6a7c4e931d19","components/structure/SlideFooter.jsx":"4ec533f354e8","components/structure/SlideFrame.jsx":"c14f8e7cbfef","components/structure/SlideHeader.jsx":"662505628c33","components/structure/TakeawayBar.jsx":"895817283792","components/structure/TitleSlide.jsx":"7d6b33696844"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IdeaPitchSKTDesignSystem_14362e = window.IdeaPitchSKTDesignSystem_14362e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/blocks/EmphasisBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A sky-blue band carrying an in-card intermediate conclusion (중간 결론). */
function EmphasisBand({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'absolute',
      height: 'var(--band-h)',
      background: 'var(--sky)',
      color: 'var(--navy)',
      fontSize: '17px',
      fontWeight: 800,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 16px',
      textAlign: 'center',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { EmphasisBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/EmphasisBand.jsx", error: String((e && e.message) || e) }); }

// components/blocks/EntityBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TENSE = {
  past: {
    background: 'var(--steel)',
    color: 'var(--text-invert)'
  },
  plan: {
    background: 'var(--navy)',
    color: 'var(--text-invert)'
  },
  future: {
    background: 'var(--bg-app)',
    border: '1.5px dashed var(--navy)',
    color: 'var(--navy)'
  }
};

/** An entity box in one of the three information-tense styles: past / plan / future. */
function EntityBox({
  tense = 'plan',
  title,
  sub,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: '15px',
      fontWeight: 800,
      lineHeight: 1.3,
      boxSizing: 'border-box',
      ...TENSE[tense],
      ...style
    }
  }, rest), title != null ? title : children, sub != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      fontWeight: 400
    }
  }, sub));
}
Object.assign(__ds_scope, { EntityBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/EntityBox.jsx", error: String((e && e.message) || e) }); }

// components/blocks/FlowArrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A solid block flow arrow pointing right or up (transition / increase). */
function FlowArrow({
  direction = 'right',
  color = 'var(--navy)',
  style,
  ...rest
}) {
  const clip = direction === 'up' ? 'polygon(30% 100%,30% 38%,0 38%,50% 0,100% 38%,70% 38%,70% 100%)' : 'polygon(0 30%,62% 30%,62% 0,100% 50%,62% 100%,62% 70%,0 70%)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'absolute',
      background: color,
      clipPath: clip,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { FlowArrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/FlowArrow.jsx", error: String((e && e.message) || e) }); }

// components/blocks/LabelChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A solid navy square label chip. */
function LabelChip({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--navy)',
      color: 'var(--text-invert)',
      fontSize: 'var(--fs-chip)',
      fontWeight: 800,
      lineHeight: 1.2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '9px 12px',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { LabelChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/LabelChip.jsx", error: String((e && e.message) || e) }); }

// components/blocks/ChipRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A label chip on the left with a bold title and muted sub-line on the right. */
function ChipRow({
  label,
  title,
  sub,
  chipWidth = '149px',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'absolute',
      display: 'flex',
      gap: '17px',
      alignItems: 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.LabelChip, {
    style: {
      width: chipWidth,
      minHeight: 'var(--chip-h)',
      flex: 'none'
    }
  }, label), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-row-title)',
      fontWeight: 700,
      lineHeight: 1.3
    }
  }, title), sub != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sub)',
      color: 'var(--text-muted)',
      marginTop: '4px',
      lineHeight: 1.4
    }
  }, sub)));
}
Object.assign(__ds_scope, { ChipRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/ChipRow.jsx", error: String((e && e.message) || e) }); }

// components/blocks/SectionCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A white rounded section card with a navy pill label straddling its top border. */
function SectionCard({
  label,
  subhead,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'absolute',
      background: 'var(--surface-card)',
      border: '1.3px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      ...style
    }
  }, rest), label != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translate(-50%, -50%)',
      height: 'var(--pill-h)',
      padding: '0 30px',
      background: 'var(--navy)',
      color: 'var(--text-invert)',
      borderRadius: 'var(--radius-pill)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'var(--fs-pill)',
      fontWeight: 800,
      whiteSpace: 'nowrap'
    }
  }, label), subhead != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '30px',
      left: 0,
      right: 0,
      textAlign: 'center',
      fontSize: 'var(--fs-card-head)',
      fontWeight: 700,
      lineHeight: 1.3,
      padding: '0 20px'
    }
  }, subhead), children);
}
Object.assign(__ds_scope, { SectionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/SectionCard.jsx", error: String((e && e.message) || e) }); }

// components/blocks/Timeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A horizontal timeline: line + circular nodes (done = filled navy, open = ring), with labels. */
function Timeline({
  items = [],
  lineTop = '20px',
  style,
  ...rest
}) {
  const n = items.length;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'absolute',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '8px',
      right: '8px',
      top: lineTop,
      height: '2px',
      background: 'var(--border-subtle)'
    }
  }), items.map((it, i) => {
    const frac = n > 1 ? i / (n - 1) : 0.5;
    const left = 'calc(8px + (100% - 16px) * ' + frac + ')';
    const done = it.state !== 'open';
    const dot = done ? {
      background: 'var(--navy)'
    } : {
      background: 'var(--sky)',
      border: '2px solid var(--navy)'
    };
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left,
        top: lineTop,
        width: '17px',
        height: '17px',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        boxSizing: 'border-box',
        ...dot
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left,
        top: 'calc(' + lineTop + ' + 16px)',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        width: '130px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '15px',
        fontWeight: 800,
        color: it.hot ? 'var(--red)' : 'inherit'
      }
    }, it.label), it.sub != null && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '12px',
        color: 'var(--text-muted)',
        marginTop: '2px'
      }
    }, it.sub)));
  }));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/blocks/TrackArrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  navy: {
    color: 'var(--text-invert)',
    background: 'var(--navy)',
    clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 50%,calc(100% - 16px) 100%,0 100%)'
  },
  steel: {
    color: 'var(--text-invert)',
    background: 'var(--steel)',
    clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 50%,calc(100% - 16px) 100%,0 100%)'
  },
  wait: {
    color: 'var(--navy)',
    background: 'var(--bg-app)',
    border: '1.5px dashed var(--navy)'
  }
};

/** A pentagon track-arrow segment for Two-Track roadmaps. Variants: navy / steel / wait. */
function TrackArrow({
  variant = 'navy',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      fontWeight: 800,
      boxSizing: 'border-box',
      ...VARIANTS[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TrackArrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/TrackArrow.jsx", error: String((e && e.message) || e) }); }

// components/structure/GoverningHeadline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zone 2 — the centered one-line judgment ('판단') that governs the slide. */
function GoverningHeadline({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'absolute',
      left: 'var(--margin-x)',
      right: 'var(--margin-x)',
      top: 'var(--zone-headline-y)',
      height: '58px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'var(--fs-headline)',
      fontWeight: 800,
      textAlign: 'center',
      textWrap: 'balance',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GoverningHeadline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/GoverningHeadline.jsx", error: String((e && e.message) || e) }); }

// components/structure/SectionDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 간지 — a full-bleed NAVY section-divider slide. Big ghost section number on the
 * right, kicker + orange accent rule + section title + optional description on the
 * left, white SKT mark and page number in the footer. Gives the deck section rhythm.
 */
function SectionDivider({
  number = '01',
  kicker = 'SECTION',
  title,
  desc,
  page,
  total,
  logoSrc = 'assets/skt-logo-white.svg',
  style,
  ...rest
}) {
  const pageLabel = page != null ? total != null ? `${page} / ${total}` : String(page) : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: 'var(--slide-w, 1280px)',
      height: 'var(--slide-h, 720px)',
      background: 'var(--navy)',
      color: 'var(--text-invert)',
      fontFamily: 'var(--font-slide)',
      overflow: 'hidden',
      wordBreak: 'keep-all',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '40px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '360px',
      fontWeight: 800,
      lineHeight: 1,
      color: 'var(--navy-600)',
      letterSpacing: '-8px',
      userSelect: 'none'
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--margin-x)',
      top: '50%',
      transform: 'translateY(-50%)',
      maxWidth: '760px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-divide-kicker)',
      fontWeight: 800,
      letterSpacing: '6px',
      color: 'var(--navy-200)'
    }
  }, kicker, " ", number), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '64px',
      height: '4px',
      background: 'var(--skt-orange)',
      margin: '18px 0 22px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-divider-title)',
      fontWeight: 800,
      lineHeight: 1.2
    }
  }, title), desc != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '18px',
      fontSize: 'var(--fs-divider-desc)',
      fontWeight: 400,
      lineHeight: 1.5,
      color: 'var(--navy-200)',
      maxWidth: '620px'
    }
  }, desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--margin-x)',
      right: 'var(--margin-x)',
      bottom: '28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "SK telecom",
    style: {
      height: 'var(--footer-logo-h)',
      display: 'block'
    }
  }), pageLabel != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-footer)',
      fontWeight: 700,
      color: 'var(--navy-200)'
    }
  }, pageLabel)));
}
Object.assign(__ds_scope, { SectionDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/SectionDivider.jsx", error: String((e && e.message) || e) }); }

// components/structure/SlideFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Footer chrome — SKT brand mark at the bottom-left and the page number at the
 * bottom-right, separated from the body by a thin hairline. Sits below the
 * TakeawayBar in the reserved footer zone.
 */
function SlideFooter({
  page,
  total,
  logoSrc = 'assets/skt-logo.svg',
  source,
  showRule = true,
  style,
  ...rest
}) {
  const pageLabel = page != null ? total != null ? `${page} / ${total}` : String(page) : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'absolute',
      left: 'var(--margin-x)',
      right: 'var(--margin-x)',
      top: 'var(--zone-footer-y)',
      height: 'var(--zone-footer-h)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      ...style
    }
  }, rest), showRule && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '-10px',
      height: '1px',
      background: 'var(--footer-line)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "SK telecom",
    style: {
      height: 'var(--footer-logo-h)',
      display: 'block',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }
  }, source != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-footer)',
      color: 'var(--text-muted)'
    }
  }, source), pageLabel != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-footer)',
      fontWeight: 700,
      color: 'var(--text-muted)'
    }
  }, pageLabel)));
}
Object.assign(__ds_scope, { SlideFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/SlideFooter.jsx", error: String((e && e.message) || e) }); }

// components/structure/SlideFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The 1280x720 Idea Pitch slide canvas. Zone/block components position inside it. */
function SlideFrame({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: 'var(--slide-w, 1280px)',
      height: 'var(--slide-h, 720px)',
      background: 'var(--bg-app)',
      color: 'var(--ink)',
      fontFamily: 'var(--font-slide)',
      fontWeight: 400,
      overflow: 'hidden',
      wordBreak: 'keep-all',
      overflowWrap: 'break-word',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SlideFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/SlideFrame.jsx", error: String((e && e.message) || e) }); }

// components/structure/SlideHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zone 1 — deck name | section label, an optional top-right subtitle (소제목),
 * plus the 2px underline rule.
 */
function SlideHeader({
  deck = 'Idea Pitch',
  section,
  subtitle,
  showRule = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'absolute',
      left: 'var(--margin-x)',
      top: 'var(--zone-header-top)',
      display: 'flex',
      alignItems: 'baseline',
      gap: '16px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-header)',
      fontWeight: 800
    }
  }, deck), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-section)',
      color: 'var(--text-muted)'
    }
  }, "|"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-section)',
      fontWeight: 800
    }
  }, section)), subtitle != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 'var(--margin-x)',
      top: 'calc(var(--zone-header-top) + 12px)',
      fontSize: 'var(--fs-subtitle)',
      fontWeight: 700,
      color: 'var(--text-muted)',
      letterSpacing: '.2px'
    }
  }, subtitle), showRule && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--margin-x)',
      right: 'var(--margin-x)',
      top: 'var(--zone-rule-y)',
      height: '2px',
      background: 'var(--ink)'
    }
  }));
}
Object.assign(__ds_scope, { SlideHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/SlideHeader.jsx", error: String((e && e.message) || e) }); }

// components/structure/TakeawayBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zone 4 — the navy conclusion bar carrying the slide's action implication ('행동 함의'). */
function TakeawayBar({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'absolute',
      left: 'var(--margin-x)',
      right: 'var(--margin-x)',
      top: 'var(--zone-takeaway-y)',
      height: 'var(--zone-takeaway-h)',
      background: 'var(--navy)',
      borderRadius: 'var(--radius-bar)',
      color: 'var(--text-invert)',
      fontSize: 'var(--fs-takeaway)',
      fontWeight: 800,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px',
      textAlign: 'center',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TakeawayBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/TakeawayBar.jsx", error: String((e && e.message) || e) }); }

// components/structure/TitleSlide.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 표지 — the deck cover / main title slide. Full-bleed NAVY with a thin orange top
 * band, spaced eyebrow, orange accent rule, large deck title, subtitle, and a bottom
 * meta row (white SKT mark left · date/org/classification right).
 */
function TitleSlide({
  eyebrow = 'IDEA PITCH',
  title,
  subtitle,
  meta,
  logoSrc = 'assets/skt-logo-white.svg',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: 'var(--slide-w, 1280px)',
      height: 'var(--slide-h, 720px)',
      background: 'var(--navy)',
      color: 'var(--text-invert)',
      fontFamily: 'var(--font-slide)',
      overflow: 'hidden',
      wordBreak: 'keep-all',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '6px',
      background: 'var(--skt-orange)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--margin-x)',
      top: '50%',
      transform: 'translateY(-50%)',
      maxWidth: '940px'
    }
  }, eyebrow != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-title-eyebrow)',
      fontWeight: 800,
      letterSpacing: '8px',
      color: 'var(--navy-200)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '72px',
      height: '5px',
      background: 'var(--skt-orange)',
      margin: '22px 0 26px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-title)',
      fontWeight: 800,
      lineHeight: 1.15,
      textWrap: 'balance'
    }
  }, title), subtitle != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '22px',
      fontSize: 'var(--fs-title-sub)',
      fontWeight: 700,
      color: 'var(--navy-200)',
      lineHeight: 1.45,
      maxWidth: '760px'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--margin-x)',
      right: 'var(--margin-x)',
      bottom: '38px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '-18px',
      height: '1px',
      background: 'var(--navy-600)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "SK telecom",
    style: {
      height: '22px',
      display: 'block'
    }
  }), meta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-title-meta)',
      fontWeight: 700,
      color: 'var(--navy-200)',
      letterSpacing: '.3px'
    }
  }, meta)));
}
Object.assign(__ds_scope, { TitleSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/TitleSlide.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ChipRow = __ds_scope.ChipRow;

__ds_ns.EmphasisBand = __ds_scope.EmphasisBand;

__ds_ns.EntityBox = __ds_scope.EntityBox;

__ds_ns.FlowArrow = __ds_scope.FlowArrow;

__ds_ns.LabelChip = __ds_scope.LabelChip;

__ds_ns.SectionCard = __ds_scope.SectionCard;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.TrackArrow = __ds_scope.TrackArrow;

__ds_ns.GoverningHeadline = __ds_scope.GoverningHeadline;

__ds_ns.SectionDivider = __ds_scope.SectionDivider;

__ds_ns.SlideFooter = __ds_scope.SlideFooter;

__ds_ns.SlideFrame = __ds_scope.SlideFrame;

__ds_ns.SlideHeader = __ds_scope.SlideHeader;

__ds_ns.TakeawayBar = __ds_scope.TakeawayBar;

__ds_ns.TitleSlide = __ds_scope.TitleSlide;

})();
