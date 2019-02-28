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
const age = observable.box(-1)
autorun(() => {
    if (age.get() < 0)
        throw new Error("Age should not be negative")
    console.log("Age", age.get())
}, {
    onError(e) {
        window.alert("Please enter a valid age")
    }
})
export default Store;
