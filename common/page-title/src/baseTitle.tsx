import React from "react";
import { useTranslation } from 'react-i18next';
// import { BaseTextProps } from "./index.interface";

const BaseTitle = ({
  children,
  tag,
  disableTranslation,
  ...otherProps
}: any) => {
    const { t } = useTranslation()

  const translatedLabel = disableTranslation
    ? children
    : t(children);

  if (tag === "fragment") {
    return <>{translatedLabel}</>;
  }

  const ProperTag = (tag || "p") as React.ElementType<any>;

  return <ProperTag children={translatedLabel} {...otherProps} />;
};
export default BaseTitle;
