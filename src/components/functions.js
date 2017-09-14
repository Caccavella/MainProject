// module.exports = () => {
//     document.getElementById('target').onclick = () => {
//         var wnd = window.open(this.state.urls, width=100, height=100);
//         setTimeout(() => {
//             wnd.close();
//         }, 3000)
//     }
//     return false;
// }

export function onEnter(event, cb) {
    // eslint-disable-next-line
    if(event.key =='Enter') {
        cb(event.target.value)
    }
}

