import ProtectedRoute from './protected';

export default ProtectedRoute.extend({
  model (params) {
    return this.store.find('repo', params.id);
  }
});
