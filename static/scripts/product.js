class Product extends BaseObject {
    constructor(data, index) {
        let li = createEl(
            "li",
            {
                "id": "product_" + index
            });

        li.appendChild(
            createEl(
                "img",
                {
                    "src": "/images/" + data["icon"]
                }));
        li.appendChild(
            createEl(
                "span",
                {
                    "innerText": data["name"]
                }));

        super(li);

        this.data = data
    }
}