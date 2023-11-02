// ListTemplate class
export class ListTemplate {
    // attaches a 'ul' element when creating an object of the class
    constructor(ul) {
        this.ul = ul;
    }
    // this method creates the list and attaches it to the 'ul' element
    render(item, heading, position) {
        let list = document.createElement('li');
        let h4 = document.createElement('h4');
        h4.innerText = heading;
        list.append(h4);
        let p = document.createElement('p');
        p.innerText = item.format(); // 'item' can be Invoice or Payment object
        list.append(p);
        // 'position' determines placement of 'list' in 'ul'
        if (position === 'start') {
            this.ul.prepend(list);
        }
        else {
            this.ul.append(list);
        }
    }
}
