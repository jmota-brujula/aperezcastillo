var self, itemSelected, index = 0;
var toastMessageUndoChanges, auxData = [];
var data = [
    {
        id: 'item' + 0,
        selected: false,
        text: 'Sample #1'
    },
    {
        id: 'item' + 1,
        selected: false,
        text: 'Sample #2'
    },
    {
        id: 'item' + 2,
        selected: false,
        text: 'Sample #3'
    },
    {
        id: 'item' + 3,
        selected: false,
        text: 'Sample #4'
    },
];

class ObjectDefault {

    constructor() {
        self = this;
        self.dataSample = data;
        self.auxData = auxData;
        self.init();
    }

    init() {

        self.toastMessageUndoChanges = document.querySelector('.ex-toast');
        self.dataSample.forEach(function (element) {
            self.renderItem(element.text);
        });
    }

    addItem(e) {
        e.preventDefault();
        self.restoreValues();
        var valuePrompt = prompt('Type a string to add list', 'Sample');
        self.dataSample.push({ id: 'item' + index, text: valuePrompt, selected: false })
        self.renderItem(valuePrompt);
    }

    renderItem(value) {
        var list = document.querySelector('.ex-list')
        var item = document.createElement("LI");
        item.className = 'ex-list__item';
        item.id = 'item' + index;
        var text = document.createTextNode(value);
        item.appendChild(text);
        list.appendChild(item);
        item.addEventListener('click', self.selectItem);
        index++;
        self.toastMessageUndoChanges.setAttribute('class', 'ex-toast ex-toast--hidden')
    }

    restoreValues(){
        self.removeAllClassActive();
        self.itemSelected = null;
        self.dataSample.forEach(element => {
            element.selected = false;
        });
    }

    selectItem(e) {
        if (self.itemSelected === e.target) {
            self.removeItem(null);
        }
        self.itemSelected = e.target;
        self.addClassActive(e.target);
        self.dataSample.forEach(element => {
            if (e.target.id === element.id) {
                element.selected = true;
            }
        });
    }

    removeAllClassActive() {
        var items = document.querySelectorAll('.ex-list li');
        items.forEach(element => {
            element.setAttribute('class', 'ex-list__item')
        });
    }

    addClassActive(target) {
        target.setAttribute('class', 'ex-list__item ex-list__item--active')
    }

    removeItem(e) {
        if (e !== null) {
            e.preventDefault();
        }
        self.removeAllClassActive();
        if (self.itemSelected) {
            var item = document.querySelector('#' + self.itemSelected.id);
            if (item) {
                item.remove();
                this.removeAllSelected(null);
                self.toastMessageUndoChanges.setAttribute('class', 'ex-toast');

            } else {
                alert('Select an item to perform this action')
            }
        }
    }

    removeAllSelected(e) {
        if (e) {
            e.preventDefault();
        }
        self.dataSample.forEach((element, index) => {
            if (element.selected) {
                // remove of dom
                var item = document.querySelector('#' + element.id);
                if (item) {
                    item.remove();
                    self.toastMessageUndoChanges.setAttribute('class', 'ex-toast');
                }
            }
        });

        //Filter arrays using the selected attribute and save deleted

        var auxArray = self.dataSample.filter(function (el) {
            return el.selected === true;
        });

        self.auxData = auxArray;

        var arrResult = self.dataSample.filter(function (el) {
            return el.selected !== true;
        });

        self.dataSample = arrResult;

        self.removeAllClassActive();
    }

    undoChanges(e) {
        if (e) {
            e.preventDefault();
        }
        self.auxData.forEach(element => {
            self.renderItem(element.text);
        });
        self.toastMessageUndoChanges.setAttribute('class', 'ex-toast ex-toast--hidden')
    }
}