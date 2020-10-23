import crudSlide from '@/app/crudSlide';

const kahootsSlice = crudSlide({
  baseUrl: `kahoots`,
  name: 'kahoots',
});
export const kahoots = kahootsSlice.reducer;
export default kahootsSlice;
