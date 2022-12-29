class StringGenerate{

    maxNum

    constructor(num){

        this.maxNum = num             
    }            

    async init(){

        await this.getSentence(this.maxNum)
     
        return new Promise(function(resolve){
                                        
            setTimeout(() => { resolve(true) }, 1000)                   
        })
    }

    async get(maxNum){
       
        return new Promise(function(resolve){
       
            for(let i = 0; i < maxNum; i ++){  

                var newElement = document.createElement("li")
                var index = (i + 1)
                newElement.classList.add("list-group-item")  
                newElement.setAttribute("id", "str-" + index)            
                newElement.textContent = index + ". " + localStorage.getItem(i)
                document.getElementById("list").appendChild(newElement);
            } 
                          
            resolve(true)
        });
    }

    async start(){

        await this.init(this.maxNum)
        await this.get(this.maxNum)
    }

    async getSentence(maxNum){

        return new Promise( function(resolve, reject){

            var resultArray = [];

            var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
            var xhr = new XHR();
            var type = 'sentence';
            var number = 25; 
            var params = '&type=' + type + '&number=' + number;
            xhr.open('GET', 'https://fish-text.ru/get?' + params, true);

            xhr.onload = function () {
            
                var result = JSON.parse(this.responseText);

                if (result.status === 'success') {

                    var resultText =  result.text
                
                    resultArray = resultText.slice(0,-1).split('.')

                    for(let i = 0; i < maxNum; i ++){
                            var rand = Math.floor(Math.random() * resultArray.length);
                            localStorage.setItem(i, resultArray[rand])
                    } 

                } else {
                
                    console.log(result.errorCode + '\n' + result.text);
                }  
             
                resolve(resultArray)
            }

            xhr.onerror = function () {
                alert('Ошибка ' + this.status);
            };

            xhr.send(); 
                               
        })
    }
}


class scrollStart{

    maxNum

    constructor(num){
        this.maxNum = num
    }

    getInputValue(){

        var num = document.getElementById("scroll-target").value
        return num > this.maxNum ? this.maxNum : num
    }

    scrollTo(element){

        element = element > 2 ? element - 2 : element--

        document.getElementById("str-" + element).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    scrollToEnd(){
        this.scrollTo(this.maxNum)
    }

    scrollToStart(){
        this.scrollTo(0)
    }

    scrollToInputValue(){
        this.scrollTo(this.getInputValue())
    }
}
