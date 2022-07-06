import { Breadcrumbs } from '../../components/breadcrumbs';
import { LocationsHeader } from '../../components/locations-header';
import { CardList } from '../../components/card-list';

import './settings.scss';

export const Settings = () => {
  return (
    <section className="settings">
      <Breadcrumbs />
      <LocationsHeader />
      <CardList />
    </section>
  );
};
