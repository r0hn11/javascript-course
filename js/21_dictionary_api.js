if(location.href.slice(location.href.lastIndexOf('/')+1,)!=='dictionary.html'){window.open('projects/dictionary.html')}

// Problem: use sample word api containing objects. print definitions from all results. (link: https://api.dictionaryapi.dev/api/v2/entries/en/<word>)

const sbtn = document.getElementById('search')
const textbox = document.getElementById('textbox')
const nountext = document.getElementById('noun')
const typetext = document.getElementById('type')
const definetext = document.getElementById('define')
const reftext = document.getElementById('ref')
const loader = document.getElementById('loader')
const notfound = document.getElementById('nf')

sbtn.addEventListener('click',function(e){
    e.preventDefault()
    let word = textbox.value
    if(word!=''){
        search(word)
    }
    else{
        textbox.style.borderColor= '#FF5959'
        setTimeout(function(){
            textbox.style.borderColor= 'transparent'
        }, 1500);
    }
})

function search(word){
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    xhr.getResponseHeader('Content-type', 'application/JSON')
    
    xhr.onprogress = function(){
        loader.style.display = 'flex'
    }
    
    xhr.onload = function(){
        if(this.status === 200){
            loader.style.display = 'none'
            let info = JSON.parse(this.responseText)

            document.querySelector('.result').style.display = 'flex'
            type = info[0].meanings[0].partOfSpeech
            define = info[0].meanings[0].definitions[0].definition
            ref = info[0].sourceUrls[0]
            
            textbox.value = ''
            nountext.innerHTML = word
            typetext.innerHTML = type
            definetext.innerHTML = define
            reftext.innerHTML = `<a href='${ref}'>${ref}</a>`
            notfound.style.display = 'none'
        }
        else if(this.status === 404){
            loader.style.display = 'none'
            textbox.value = ''
            document.querySelector('.result').style.display = 'none'
            notfound.style.display = 'block'
            notfound.innerHTML = `<span class="bold">${word}</span> not found. Try something else.`
        }
    }

    xhr.send()
}





/*

[
    {
      "word": "hello",
      "phonetic": "həˈləʊ",
      "phonetics": [
        {
          "text": "həˈləʊ",
          "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
        },
        {
          "text": "hɛˈləʊ"
        }
      ],
      "origin": "early 19th century: variant of earlier hollo ; related to holla.",
      "meanings": [
        {
          "partOfSpeech": "exclamation",
          "definitions": [
            {
              "definition": "used as a greeting or to begin a phone conversation.",
              "example": "hello there, Katie!",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "an utterance of ‘hello’; a greeting.",
              "example": "she was getting polite nods and hellos from people",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "verb",
          "definitions": [
            {
              "definition": "say or shout ‘hello’.",
              "example": "I pressed the phone button and helloed",
              "synonyms": [],
              "antonyms": []
            }
          ]
        }
      ]
    }
  ]

  */