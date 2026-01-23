function getAverageGrade(scores){
      const totalScores = scores.reduce((accumulater, currentValue)=>accumulater + currentValue,0)

      if(scores.length === 0) return

      const avg = totalScores / scores.length

      return getGrage(avg)
}
function getGrage(avg){
      if(avg >= 97){
            return 'A+'
      }else if(avg >= 93){
            return 'A'
      }else if(avg >= 90){
            return 'A-'
      }else if(avg >= 87){
            return 'B+'
      }else if(avg >= 83){
            return 'B'
      }else if(avg >= 80){
            return 'B-'
      }else if(avg >= 77){
            return 'C+'
      }else if(avg >= 73){
            return 'C'
      }else if(avg >= 70){
            return 'C-'
      }else if(avg >= 67){
            return 'D+'
      }else if(avg >= 63){
            return 'D'
      }else if(avg >= 60){
            return 'D-'
      }else{
            return 'F'
      }
}
const scores = [
      90,85,90,90
]
console.log(getAverageGrade(scores))