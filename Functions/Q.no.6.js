function longestString(strings){
    const input=strings.split(" ")
    const length=[]

    for (let i = 0; i < input.length; i++) {
            var a=input[i].length
            length.push(a)
        }
        var sortedLength=length.sort((c,d)=> d-c)
        console.log(sortedLength[0])

        for (let j = 0; j < input.length; j++) {
            if (input[j].length === sortedLength[0]) {
                console.log(input[j]); 
                break;     // It breaks the loops after the if statement is true. means it won't further proceed the loop
            }
        }

    }
    longestString("Web Development Tutorial")
