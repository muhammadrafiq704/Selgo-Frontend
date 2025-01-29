import React, { CSSProperties } from "react";

interface TypographyProps {
  fs?: number;
  fw?: number;
  maxLines?: number;
  text?: string;
  styleType?: "default" | "span";
  light?: boolean;
  style?: CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  fs,
  fw,
  maxLines,
  text,
  light,
  styleType,
  style,
}) => {
  const computedStyle: CSSProperties = {
    fontSize: fs ? `${fs}rem` : "1rem",
    fontWeight: fw ? fw : 500,
    color:
      styleType === "default" ? "#fff" : styleType === "span" ? "#fff" : "gray",
    opacity: light ? 0.4 : 1,
    display: maxLines ? "-webkit-box" : undefined,
    WebkitBoxOrient: maxLines ? "vertical" : undefined,
    overflow: maxLines ? "hidden" : undefined,
    textOverflow: maxLines ? "ellipsis" : undefined,
    WebkitLineClamp: maxLines,
    ...style,
  };

  return <p style={computedStyle}>{text}</p>;
};

export default Typography;
