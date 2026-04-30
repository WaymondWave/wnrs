import { style } from "@vanilla-extract/css";

import { primaryAccent, primaryAccentMuted } from "./globals.css";

export const appStyles = style({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  alignItems: "center",
  fontWeight: 800,
  justifyContent: "center",
  maxWidth: 1080,
  margin: "0 auto",
  minHeight: "100%",
  padding: "1rem",
  "@media": {
    "screen and (min-width: 768px)": {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignItems: "center",
      padding: "0",
    },
  },
});

export const titleStyles = style({
  color: primaryAccent,
  fontSize: 30,
  marginTop: "3vh",
  marginBottom: "3vh",
  fontWeight: 800,
});

export const levelsStyles = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  gap: 8,
  width: "100%",
  "@media": {
    "screen and (min-width: 768px)": {
      flexDirection: "column",
      width: "17rem",
      gap: 0,
    },
  },
});

export const levelButtonStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 6,
  borderRadius: 15,
  border: `solid 2px ${primaryAccent}`,
  backgroundColor: "#fff",
  height: 56,
  flex: "1 1 0",
  minWidth: 80,
  maxWidth: 140,
  textTransform: "uppercase",
  color: primaryAccent,
  fontSize: 13,
  fontWeight: 800,
  fontFamily: "inherit",
  cursor: "pointer",
  ":hover": {
    backgroundColor: primaryAccentMuted,
    color: "rgb(240, 240, 240)",
  },
  selectors: {
    "&:focus, &:active": {
      outline: "none",
    },
  },
  "@media": {
    "screen and (min-width: 768px)": {
      height: 88,
      width: 231,
      flex: "none",
      maxWidth: "none",
      fontSize: 18,
      margin: 15,
    },
  },
});

export const selectedLevelStyles = style({
  backgroundColor: primaryAccent,
  color: "#fff",
  outline: "none",
});

export const nextCardButtonStlyes = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 25,
  borderRadius: 15,
  backgroundColor: primaryAccent,
  height: 88,
  width: 231,
  textTransform: "uppercase",
  color: "#fff",
  outline: "none",
  fontSize: 18,
  fontWeight: 800,
  fontFamily: '"Biryani", sans-serif',
  border: "none",
  ":hover": {
    backgroundColor: primaryAccentMuted,
    color: "rgb(240, 240, 240)",
  },
});

export const questionStyles = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  maxWidth: "26rem",
  textTransform: "uppercase",
  alignItems: "center",
});

export const langButtonStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  marginTop: 16,
  marginBottom: 16,
  padding: "10px 20px",
  borderRadius: 15,
  border: `solid 2px ${primaryAccent}`,
  backgroundColor: "#fff",
  color: primaryAccent,
  fontSize: 13,
  fontWeight: 800,
  fontFamily: "inherit",
  textTransform: "uppercase",
  cursor: "pointer",
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
