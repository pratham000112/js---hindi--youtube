const myObject = {
    js : 'javascript',
    cs : 'c sharp',
    py : 'python',
    node: 'node'
}

  for(const key in myObject) {

    console.log(`${key} shortcut for ${myObject[key]}`)
    
  }

  const programming = ["js", "rb", "py", "java", "cpp"]

  for (const key in programming) {
       console.log(programming[key]);
  }