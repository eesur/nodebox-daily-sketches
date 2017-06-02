// script to produce list (in JSON) of code files and img-refs
// these list can then be sued to create a data driven layout (automated)
const PATH = require('path');
const dirTree = require('directory-tree');
const jsonfile = require('jsonfile')
// store data
let objImg = []
let objCode = []
// have files to save data
const fileImg = 'imgTree.json'
const fileCode = 'codeTree.json'

// create js object representing a directory tree 
// https://github.com/mihneadb/node-directory-tree
const imgTree = dirTree('./img-refs', {extensions:/\.(png|gif)$/}, (item, PATH) => {
    console.log(item);
    objImg.push(item)
});
const codeTree = dirTree('./code', {extensions:/\.ndbx$/}, (item, PATH) => {
    console.log(item);
    objCode.push(item)
});

// write files
// https://www.npmjs.com/package/jsonfile
// note set the array to `.reverse()` so it newest on top
jsonfile.writeFile(fileImg, objImg.reverse(), {spaces: 2}, function(err) {
    console.error(err)
})
jsonfile.writeFile(fileCode, objCode.reverse(), {spaces: 2}, function(err) {
    console.error(err)
})