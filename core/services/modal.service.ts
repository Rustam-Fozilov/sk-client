export class ModalService {
    private isSearchModalOpened = useIsSearchModalOpened()
    private isProfileOpened = useIsProfileOpened()
    private isNavOpened = useIsNavOpened()

    public openSearchModal() {
        this.isSearchModalOpened.value = true
    }

    public openNavbar() {
        this.isNavOpened.value = true
    }

    public closeAllModals() {
        this.isSearchModalOpened.value = false
        this.isProfileOpened.value = false
        this.isNavOpened.value = false
    }

    public toggleProfileModal() {
        this.isProfileOpened.value = !this.isProfileOpened.value
    }
}
