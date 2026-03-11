import React from 'react';
import SearchForm from '../search/SearchForm';

const ModalPlacesAvailable = () => {
  return (
    <div id="modal_formPlacesAvailable" style={{ display: 'none' }} title="Наличие мест">
      <SearchForm formId="placesAvail" buttonText="Проверить" />
    </div>
  );
};

export default ModalPlacesAvailable;