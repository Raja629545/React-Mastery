function customRender(reactElement, container){

/*    const domElement = document.createElement(reactElement.type)
    domElement.innerHtml = reactElement.childrean
    domElement.setAttribute = ('href', reactElement.props.href)
    domElement.setAttribute = ('target', reactElement.props.target)
*/



}


const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    childrean : 'click me to visit google'
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer);