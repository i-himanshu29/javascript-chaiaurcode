// use link-> https://stackblitz.com/edit/dom-project-chaiaurcode-2jsyxq?file=1-colorChanger%2Fchaiaurcode.js,5-keyboard%2Findex.html 



const insert = document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
   insert.innerHTML=`<div class='color'>
                       <table>
                       <tr>
                           <th>Key</th>
                           <th>Keycode</th>
                           <th>code</th>
                       </tr>
                       <tr>
                           <td>${e.key===" " ? "Space" : e.key}</td>
                           <td>${e.keyCode}</td>
                           <td>${e.code}</td>
                       </tr>
                       
                       </table>
                   </div>`;
});