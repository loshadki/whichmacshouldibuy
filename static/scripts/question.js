class Question extends BaseObject {
    constructor(data, index, group) {
        let div = createEl(
            "div",
            {
                "id": (group + "_" + index)
            });

        div.appendChild(
            createEl(
                "h3",
                {
                    "innerText": data["question"]
                }));

        div.appendChild(
            createEl(
                "sub",
                {
                    "innerText": data["description"]
                }));

        let ul = createEl(
            "ul",
            {
                "className": "flat answers"
            });

        data["selection"].forEach((selection, _) => {
            let li = createEl(
                "li",
                {
                    "innerText": selection["answer"]
                });

            ul.appendChild(li);
        })

        div.appendChild(ul);

        super(div);

        this.data = data
    }
}