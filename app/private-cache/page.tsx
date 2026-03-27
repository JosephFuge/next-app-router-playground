import { useTranslation } from "react-i18next";
import { Suspense } from 'react';
import { ProductList, ProductListSkeleton } from './_components/product-list';
import { Boundary } from '#/ui/boundary';

export default function Page() {
  const { t } = useTranslation();
  return (
    <Boundary label={t("pagetsx_statically_inferred")} animateRerendering={false}>
      <div className="flex flex-col gap-8">
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList />
        </Suspense>
      </div>
    </Boundary>
  );
}
