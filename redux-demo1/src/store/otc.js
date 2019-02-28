import {observable, computed, action, autorun,runInAction} from 'mobx';
// import {observable, computed, action} from 'mobx';
class Store {
    // constructor(price) {
    //     this.price = price;
    // }
    @observable tradeCfg = {
        'sadf':'sadf'
    };
    @observable baseInfo = {};
    @observable callback = null;
    @observable price = 0;
    @observable amount = 1;

   
    @computed get total() {
        return this.price * this.amount;
    }
    set total(total) {
        this.price = total / this.amount // 从 total 中推导出 price
    }
    @observable token = [
        {
            "id":1,
            "name":"YD"
        },
        {
            "id":2,
            "name":"ETH"
        }
    ];
}
export default Store;
