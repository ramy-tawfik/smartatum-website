import {copyFileSync,cpSync} from "node:fs";
copyFileSync("build/index.html","../index.html");
cpSync("build/assets","../assets",{recursive:true});
console.log("Updated homepage and bundled assets. Existing root files are preserved.");
