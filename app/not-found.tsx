import { useTranslation } from "react-i18next";
import { Boundary } from '#/ui/boundary';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <Boundary label={['app/not-found.tsx']} color="pink">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">{t("not_found")}</h2>
        <p className="text-sm">{t("could_not_find_requested_resource")}</p>
      </div>
    </Boundary>
  );
}
