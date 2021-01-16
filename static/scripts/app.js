class App {
    constructor(data) {
        this.data = data
        this.products = data["products"].map((data, index) => {
            let p = new Product(data, index);
            this.elProductsList.appendChild(p.el);
            return p;
        })
        this.productSelectionQuestions = data["productSelection"].map((data, index) => {
            let q = new Question(data, index, "productSelection");
            this.elProductSelectionWizard.appendChild(q.el);
            return q;
        })
    }

    get elProductsList() {
        if (!this._elProductsList) {
            this._elProductsList = document.getElementById("product-list");
        }
        return this._elProductsList;
    }

    get elProductSelectionWizard() {
        if (!this._elProductSelectionWizard) {
            this._elProductSelectionWizard = document.getElementById("product-selection-wizard");
        }
        return this._elProductSelectionWizard;
    }
}

let appInstance = null;

(function () {
    fetch(new Request("/scripts/data.json"))
        .then(
            response => response.json()
        )
        .then(
            data => {
                appInstance = new App(data)
            }
        );
})();