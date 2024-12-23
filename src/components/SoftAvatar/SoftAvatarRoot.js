/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

export default styled(Avatar)(({ theme, ownerState = {} }) => {
  const { palette, functions, typography, boxShadows } = theme;
  const {
    shadow = "none",
    bgColor = "transparent",
    size = "md",
  } = ownerState; // הגדר ערכי ברירת מחדל

  const { gradients = {}, transparent } = palette;
  const { pxToRem, linearGradient } = functions;
  const { size: fontSize, fontWeightBold } = typography;

  // backgroundImage value
  const backgroundValue =
    bgColor === "transparent" || !gradients[bgColor]
      ? transparent.main
      : linearGradient(gradients[bgColor]?.main, gradients[bgColor]?.state);

  // size value
  let sizeValue;

  switch (size) {
    case "xs":
      sizeValue = {
        width: pxToRem(24),
        height: pxToRem(24),
        fontSize: fontSize?.xs || pxToRem(12), // הגנה על fontSize
      };
      break;
    case "sm":
      sizeValue = {
        width: pxToRem(36),
        height: pxToRem(36),
        fontSize: fontSize?.sm || pxToRem(14),
      };
      break;
    case "lg":
      sizeValue = {
        width: pxToRem(58),
        height: pxToRem(58),
        fontSize: fontSize?.sm || pxToRem(14),
      };
      break;
    case "xl":
      sizeValue = {
        width: pxToRem(74),
        height: pxToRem(74),
        fontSize: fontSize?.md || pxToRem(16),
      };
      break;
    case "xxl":
      sizeValue = {
        width: pxToRem(110),
        height: pxToRem(110),
        fontSize: fontSize?.md || pxToRem(16),
      };
      break;
    default: {
      sizeValue = {
        width: pxToRem(48),
        height: pxToRem(48),
        fontSize: fontSize?.md || pxToRem(16),
      };
    }
  }

  return {
    background: backgroundValue,
    fontWeight: fontWeightBold || 700,
    boxShadow: boxShadows[shadow] || "none", // הגנה על shadow
    ...sizeValue,
  };
});
