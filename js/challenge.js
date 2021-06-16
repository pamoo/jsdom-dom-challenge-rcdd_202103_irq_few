document.addEventListener('DOMContentLoaded', (event) => {
  const counter=document.getElementById('counter')
  const minus=document.getElementById('minus')
  const plus=document.getElementById('plus')
  const pause=document.getElementById('pause')
  const like=document.getElementById('heart')
  const likeList=document.getElementsByTagName('ul')[0]
  const form=document.getElementById('comment-form')
  const commentList=document.getElementById('list')
  const comment=document.getElementById('comment-input')

  let isPlaying=true;
  const likes=[]

  const increment=()=>{
    counter.textContent=Number(counter.textContent)+1;
  }


  const decrement=()=>{
    counter.textContent=Number(counter.textContent)-1;
  }

  const interval=setInterval(()=>{isPlaying?increment():null},1000)

    plus.onclick=()=>increment()
    minus.onclick=()=>decrement()
    pause.onclick=()=>{
      isPlaying=!isPlaying
      minus.disabled=!minus.disabled
      plus.disabled=!plus.disabled
      like.disabled=!like.disabled
      isPlaying?pause.innerText='pause':pause.innerText="resume";
    }

    like.onclick=()=>{
      likeList.innerHTML=''
      likes[Number(counter.textContent)]?likes[Number(counter.textContent)]+=1:likes[Number(counter.textContent)]=1

        likes.forEach((like,i)=>{
          const li=document.createElement('li')
          li.innerHTML=`${i} has been liked ${like} ${like>1?'times':'time'}` 
          likeList.append(li)
        })
    }

    form.onsubmit=(e)=>{
      e.preventDefault()
      list.innerHTML+=`<p>${comment.value}</p>`
    }
}); 