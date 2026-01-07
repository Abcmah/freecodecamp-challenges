function vowelCase(str){
      let results = [];
      let vowels = new Set(['a','e','i','o', 'u'])
      for(let char of str){
            if(vowels.has(char)){
                  results.push(char.toUpperCase())
            }else{
                  results.push(char.toLowerCase())
            }
      }
      return results.join('')
}
vowelCase('vowelcase')