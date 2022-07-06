import { Breadcrumbs } from '../../components/breadcrumbs';
import { LocationsHeader } from '../../components/locations-header';

import './settings.scss';

export const Settings = () => {
  return (
    <section className="settings">
      <Breadcrumbs />
      <LocationsHeader />
    </section>
  );
};
