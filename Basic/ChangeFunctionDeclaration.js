class Book
{
    addReservation(customer) {
        this.zz_addReservation(customer);
    }

    zz_addReservation(customer) {
        this._reservations.push(customer);
    }
}
