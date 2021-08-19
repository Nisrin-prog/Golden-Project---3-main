class Answers{
    constructor(hero,heroine,song,movie){
        this.hero = hero
        this.heroine = heroine
        this.song = song
        this.movie = movie
        this.answers = []
        this.localdb = []
        this.getAnswers()
    }

    async getAnswers(){
     // var aid = qid.toString()
      var answers = []
      //console.log(qid)

    await db.collection("Answers")
      .where('a_id' ,'==', qid)
      .onSnapshot((snapshot)=>{
        answers = snapshot.docs.map((doc) => doc.data())
         
         this.localdb = answers
         console.log(this.localdb)
         this.answers = this.localdb[0]
         this.checkAnswers()
      })
    }
    
    checkAnswers(){
        var heroname = this.hero.toUpperCase()
       
        if(this.answers.hero===heroname){
            console.log("YES")
            form2.hero.hide()
        }
    }
}