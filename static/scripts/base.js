function createEl(tagName, attrs) {
    let el = document.createElement(tagName);
    if (attrs) {
        Object.keys(attrs).forEach((key, _) => {
            el[key] = attrs[key];
        });
    }
    return el;
}

class BaseObject {
    constructor(el) {
        this.el = el
    }

    get app() {
        return appInstance
    }
}