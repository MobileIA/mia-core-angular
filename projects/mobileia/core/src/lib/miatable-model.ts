export class MIATableModel {
    pageCurrent = 1;
    lastPage = 1;
    itemPerPage = 10;

    wheres = [];
    filters: {[k: string]: any} = {};

    search = '';

    ordType = { title: '', asc: 1 };

    addWhere(key, value) {
        this.wheres[key] = value;
    }

    getWhere(): string {
        var result = '';
        var isFirst = true;
        // tslint:disable-next-line:forin
        for (const key in this.wheres) {
            const value = this.wheres[key];
            if (!isFirst) {
                result += ';';
            }
            result += key + ':' + value;
            isFirst = false;
        }
        return result;
    }

    resetWhere() {
        this.wheres = [];
    }

    setPagination(lastPage, itemPerPage) {
        // Guardamos ultima pagina
        this.lastPage = lastPage;
        this.itemPerPage = itemPerPage;
    }

    toParams() {
        return {
            page: this.pageCurrent,
            where: this.getWhere(),
            search: this.search,
            ord: this.ordType.title,
            asc: this.ordType.asc,
            limit: this.itemPerPage
        };
    }
}
