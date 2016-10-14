function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    if(pageIndex < 0 || pageIndex > this.pageCount()-1) return -1;
    else {
        let lastPage = this.collection.length % this.itemsPerPage; 
        if(pageIndex === this.pageCount() - 1 && lastPage > 0) return lastPage;
        else return this.itemsPerPage;
    }
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if(itemIndex < 0|| itemIndex > this.itemCount()-1) return -1;
    let page = 0, subCounter = 1;
    for(let i = 0; i <= itemIndex; i++) {
        if (subCounter === this.itemsPerPage) {
            page++;
            subCounter = 1;
        } else subCounter++;
    }
    return page;
}