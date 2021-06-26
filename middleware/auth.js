export default function (context) {
    if (!context.store.getters.isAuthenticated) {
        return context.redirect('/auth');
    }
}