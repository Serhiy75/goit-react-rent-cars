export const selectCars = state => state.cars.items;
export const selectFilter = state => state.cars.filter;
export const selectAmountCars = state => state.cars.items.length;
export const selectModalCars = state => state.modal.modalCars;

export const selectLoading = state => state.cars.isLoading;
export const selectFavoritesCars = state => state.favorite.favoritCar;
