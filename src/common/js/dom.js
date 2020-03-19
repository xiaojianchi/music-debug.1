export function addClass(el,className) {
    if(hasClass(el,className))
        return;

    let classArray = el.className.split(' ')
    classArray.push(className)
    el.className = classArray.join(' ');

}

export function hasClass(el,className) {
    const reg = new RegExp('(^|\\s)' + className + '($|\\s)');

    return reg.test(el.className)
}
