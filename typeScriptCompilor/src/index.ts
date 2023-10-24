// WATCH MODE
// It automatically  save the file we don't need to save the again and again after writing something in index.ts and then run tsc.Simply we need to learn the command called [tsc index.ts --watch]

// I am going to run this comand this comand help me to not run tsc comand again and again. ye sirf usi file main kaam keryga jis main apnay ye command run ki hogi ager aur file banain gy aur wahan py save button py click kerain gy toh kaam nai kerygi.  Ager aik file ko watch kerana h toh uske liye [tsc index.ts --watch] aur agr sali file ko watch kerwana howa toh uske liye [tsc --watch or tsc -w] likhna hota h 



let myName:string = 'Adnan';
console.log(myName);


// ROOT DIR AND OUT DIR
// ROOT DIRECTORY 
// Is ka matlab k kis folder main hum log tsc file save kerna chahty h kue k ts aur iski corresponding file aik hi folder k ander nai ho sakty isliye humain aik alag folder banana perhta h jis main corresponding files rakhty h aur doosray main hum tsc files rakhty h. Ab tsc ki files ko alag folder main save kernay k liye [config] file main aik comand hoti [rootDir ='./'] by default wo kuch aisi hoti h simply ismain humain folder ka name likh dena h jahan hum apni tsc file save kerna chahty h[rootDir ='./src'].

// OUT DIRECTORY
// Is main hum log tsc ki jo configuration files hoti h unko kisi aur folder main save kernay k liye phr sy [tsconfig] file main humain [outDir='./'] aisi hoti h simple is main bhi humain folder ka name add kerdena jis main corresponding file save kerna chahty . [outDir='./dist']


// ES LATEST FEATURES
// If we want to use ECMASCRIPT latest version than again we will go in tsconfig file there we find  [target : 'es6'] key we simple replace this one with any latest feature like [target : 'es2022'].

