import { useTranslation } from "react-i18next";
import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { Tab } from '#/ui/tabs';

export default function NotFound() {
  const { t } = useTranslation();
  const demo = db.demo.find({ where: { slug: 'not-found' } });

  return (
    <Boundary label={t("notfoundtsx")} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold text-gray-100">{t("not_found")}</h1>
        <div className="text-sm text-gray-400">{t("sorry_the_requested_resource_could_not_be_found")}</div>
      </div>
      <div className="flex">
        <Tab item={{ text: 'Home', slug: demo.slug }} />
      </div>
    </Boundary>
  );
}
