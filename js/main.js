console.log('it loaded');
var entityEl = document.querySelector('#rotate');
var entityRotX = entityEl.components.rotation.attrValue.x;

function rotate(){
    entityEl.setAttribute('rotation', {x: 0, y: entityRotX + 1, z: 0});
    entityRotX++;
}
