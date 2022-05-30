import {extendTheme} from "@chakra-ui/react";


const theme = extendTheme({
  colors: {
    brandTurquoise: "#38bcba",
    offWhite: "#f8f9fa",
    upGreen: "#48bb78",
    flatAmber: "#ffb73a",
    downRed: "#ff483a",

    HEALTH_AND_WELLNESS: "#90d127",
    MENTAL_WELLBEING: "#3d7fc9",
    READINESS_TO_LEARN: "#ff483a",
    SCHOOL_ENVIRONMENT: "#1c5e5d",
    STUDENT_SUPPORT: "#133d3c",
    RELATIONSHIPS: "#5b57cc",
    SCHOOL_COMMUNITY: "#57899f",
    LIFE_SKILLS: "#ffac1e",

    questionScale: {
      1: "#ff483a",
      2: "#ffb73b",
      3: "#ff7800",
      4: "#18807d",
      5: "#055451"
    }
  },
  semanticTokens: {
    colors: {
      primary: {
        default: "brandTurquoise",
      },
      secondary: {
        default: "white"
      },
      background: {
        default: "offWhite"
      },
      up: {
        default: "upGreen",
      },
      flat: {
        default: "flatAmber",
      },
      down: {
        default: "downRed",
      },
    }
  },
  textStyles: {
    "h-bold-4xl": {
      fontFamily: "AcherusGrotesque",
      fontSize: "36px",
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    },
    "h-reg-4xl": {
      fontFamily: "AcherusGrotesque",
      fontSize: "36px",
      fontWeight: "normal",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    },
    "h-bold-3xl": {
      fontFamily: "AcherusGrotesque",
      fontSize: "30px",
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    },
    "h-reg-3xl": {
      fontFamily: "AcherusGrotesque",
      fontSize: "30px",
      fontWeight: "normal",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    },
    "h-reg-2xl": {
      fontFamily: "AcherusGrotesque",
      fontSize: "24px",
      fontWeight: "normal",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    },
    "h-bold-xl": {
      fontFamily: "AcherusGrotesque",
      fontSize: "20px",
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    },
    "h-reg-xl": {
      fontFamily: "AcherusGrotesque",
      fontSize: "20px",
      fontWeight: "normal",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    },
    "h-bold-lg": {
      fontFamily: "AcherusGrotesque",
      fontSize: "18px",
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    },
    "h-reg-lg": {
      fontFamily: "AcherusGrotesque",
      fontSize: "18px",
      fontWeight: "normal",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    },
    "b-bold-md": {
      fontFamily: "OpenSans",
      fontSize: "16px",
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    },
    "b-reg-md": {
      fontFamily: "OpenSans",
      fontSize: "16px",
      fontWeight: "normal",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    },
    "b-bold-sm": {
      fontFamily: "OpenSans",
      fontSize: "14px",
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    },
    "b-semi-sm": {
      fontFamily: "OpenSans",
      fontSize: "14px",
      fontWeight: "600",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    },
    "b-reg-sm": {
      fontFamily: "OpenSans",
      fontSize: "14px",
      fontWeight: "normal",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    },
    "b-bold-xs": {
      fontFamily: "OpenSans",
      fontSize: "12px",
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    },
    "b-reg-xs": {
      fontFamily: "OpenSans",
      fontSize: "12px",
      fontWeight: "normal",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
    }
  },
})

export default theme;
