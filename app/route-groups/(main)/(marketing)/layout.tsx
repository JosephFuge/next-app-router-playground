import { useTranslation } from "react-i18next";
import { Boundary } from '#/ui/boundary';
import React from 'react';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation();
  return <Boundary label={t("mainmarketinglayouttsx")}>{children}</Boundary>;
}
