'use client';

import { useTranslation } from "react-i18next";
import { Boundary } from '#/ui/boundary';
import Button from '#/ui/button';
import React from 'react';

export default function Error({ error, reset }: any) {
  const { t } = useTranslation();
  React.useEffect(() => {
    console.log('logging error:', error);
  }, [error]);

  return (
    <Boundary label={t("errortsx")} color="red">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-gray-300">Error</h1>
        <div className="text-sm text-gray-500">{error?.message}</div>
        <div className="flex">
          <Button onClick={() => reset()}>{t("try_again")}</Button>
        </div>
      </div>
    </Boundary>
  );
}
