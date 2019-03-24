import { render,Element,setAttr } from "./element";

let allPathes;
let index = 0;      //默认哪个需要打补丁
function patch(node,patches){ //node是一个真实的dom
    //给某个元素打补丁
    allPathes = patches;

    walk(node);
    //给元素打补丁

}
function walk(node){
    let currentPatch = allPathes[index++];
    let childNodes = node.childNodes;
    childNodes.forEach((child)=>walk(child));
    if(currentPatch){
        doPatch(node,currentPatch)
    }
}
function doPatch(node,patches){
    patches.forEach(patch=>{
        console.log('patch :', patch);
        switch(patch.type){
            case 'ATTRS':
                for(let key in patch.attrs){
                    let value = patch.attrs[key];
                    if(value){
                        setAttr(node,key,value)
                    }else{
                        node.removeAttribute(key);
                    }
                }
            break;
            case 'TEXT':
                node.textContent = patch.text
            break;
            case 'REPLACE':
                let newNode = (patch.newNode instanceof Element)?render(patch.newNode) :document.createTextNode(patch.newNode);
                node.parentNode.replaceChild(newNode,node)
            break;
            case 'REMOVE':
                node.parentNode.removeChild(node);
            break;
        }
    })
}
export default patch