class ActivityFactory {
    constructor(dataFetch, idUser) {
        this.dataInitial = dataFetch;
        this.idUser = idUser;
        this.dataUser = undefined;
        this.dataActKilogram = [];
        this.dataActCalories = [];
    }

    get dataIdUser() {
        this.dataInitial.map((element) => {
            if (element.userId === this.idUser) {
                this.dataUser = element.sessions;
            }
        });
        return this.dataUser;
    }

    get dataLength() {
        return this.dataUser.length;
    }

    get dataListKilogram() {
        this.dataUser.map((element) => {
            this.dataActKilogram.push(element.kilogram);
        });
        return this.dataActKilogram;
    }
    get dataListCalories() {
        this.dataUser.map((element) => {
            this.dataActCalories.push(element.calories);
        });
        return this.dataActCalories;
    }
}
