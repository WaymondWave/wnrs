import { style } from "@vanilla-extract/css";

import { primaryAccent, primaryAccentMuted } from "../../styles/globals.css";

export const overlayStyles = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  padding: 20,
});

export const modalStyles = style({
  backgroundColor: "#fff",
  borderRadius: 30,
  padding: 40,
  maxWidth: 560,
  width: "100%",
  maxHeight: "90vh",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 16,
  "@media": {
    "screen and (max-width: 480px)": {
      padding: 24,
      borderRadius: 20,
    },
  },
});

export const titleStyles = style({
  color: primaryAccent,
  fontSize: 26,
  fontWeight: 800,
  textTransform: "uppercase",
  textAlign: "center",
  "@media": {
    "screen and (max-width: 480px)": {
      fontSize: 20,
    },
  },
});

export const subtitleStyles = style({
  color: "#888",
  fontSize: 13,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  textAlign: "center",
  marginBottom: 8,
});

export const gridStyles = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
  gap: 12,
  width: "100%",
  "@media": {
    "screen and (max-width: 480px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
      gap: 8,
    },
  },
});

export const langOptionStyles = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 6,
  padding: "14px 10px",
  borderRadius: 15,
  border: `solid 2px ${primaryAccent}`,
  backgroundColor: "#fff",
  color: primaryAccent,
  fontFamily: "inherit",
  fontWeight: 800,
  cursor: "pointer",
  transition: "all 0.15s ease",
  ":hover": {
    backgroundColor: primaryAccentMuted,
    color: "#fff",
  },
  selectors: {
    "&:focus, &:active": {
      outline: "none",
    },
  },
});

export const selectedLangOptionStyles = style({
  backgroundColor: primaryAccent,
  color: "#fff",
});

export const flagStyles = style({
  fontSize: 28,
  lineHeight: 1,
});

export const langNameStyles = style({
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});
