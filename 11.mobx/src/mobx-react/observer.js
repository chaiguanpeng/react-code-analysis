import autorun from '../mobx/autorun'

function observer(target) {
    let cwn = target.prototype.componentWillMount;
    target.prototype.componentWillMount = function () {
        cwn && cwn.call(this);
        autorun(()=>{ //只要依赖的数据更新了就调用强制更新的方法
            this.render();
            this.forceUpdate();
        })
    }
}
export default observer

