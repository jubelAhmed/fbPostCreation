

// post creation module


const URL = 'http://localhost:4000/posts'

window.onload = () =>{

    loadAllPost();
    let postBtn = document.querySelector('#post-btn');
    postBtn.addEventListener('click',function(){
        savePostData();
    })

}

function loadAllPost (){

     axios(URL)
    .then((res)=>{
        res.data.map((post)=>{
                createPostTemplet(post)
        })
    })
    .catch((err)=>console.log(err));
}


function savePostData(){
    let postSenderName = document.querySelector('#postSenderName');
    let post = document.querySelector('#post');
    let bgColor = document.querySelector('#bg-color');
    let fontColor = document.querySelector('#font-color');
    let fontSize = document.querySelector('#font-size');
    let fontFamily = document.querySelector('#font-family');

    let postObj = {
        
        senderName : postSenderName.value,
        post : post.value,
        style : {
            bgColor : bgColor.value,
            fontColor : fontColor.value,
            fontSize : fontSize.value,
            fontFamily : fontFamily.value
        }
        

    }
    

     axios.post(URL, postObj)
        .then((res) =>{
             createPostTemplet(postObj)
        })
        .catch((err)=> console.log(err))  
        // createPostTemplet(postObj)

}


function createPostTemplet(postData){

    const allPostContainer = document.querySelector('.all-post-maintain'); 
     
    let onePostMaintain = document.createElement('div');
    onePostMaintain.className = 'one-post-maintain';
    
    let wrapOnePost = document.createElement('div');
    wrapOnePost.className = 'wrap-one-post';

    onePostMaintain.appendChild(wrapOnePost);

                    // start post submission maintain

    let postSubmissionMaintain = document.createElement('div');
    postSubmissionMaintain.className = 'post-submission-maintain';

    wrapOnePost.appendChild(postSubmissionMaintain);

    let postHeader = document.createElement('div');
    postHeader.className = 'post-header';

    postSubmissionMaintain.appendChild(postHeader);
    
    let flexRow = document.createElement('div');
    flexRow.className = 'd-flex flex-row bd-highlight mb-3';

    postHeader.appendChild(flexRow);

    let proPixMaintain = document.createElement('div');
    proPixMaintain.className = 'p-2 bd-highlight profile-picture';

    let pixLetter = document.createElement('p');
     
    // first Letter fo name function 

    let firstLetterOfPix = getFirstLetter(postData.senderName);

    pixLetter.setAttribute('data-letters',`${firstLetterOfPix}`);

    let profileNameMaintain = document.createElement('div');
    profileNameMaintain.className = 'p-2 bd-highlight profile-name mt-1';

    // profileNAme
    console.log(`${postData.senderName}`)

    let name = postData.senderName;

    let profileName = document.createElement('p');
    profileName.className = 'h4 text-primary';
    profileName.innerHTML = `${name}`;

    profileNameMaintain.appendChild(profileName)

    proPixMaintain.appendChild(pixLetter);
    flexRow.appendChild(proPixMaintain);
    flexRow.appendChild(profileNameMaintain);
    postHeader.appendChild(flexRow);

    
    var hr1 = document.createElement("HR");
    postSubmissionMaintain.appendChild(hr1);

    let mainPost = document.createElement('div');
    mainPost.className = 'main-post shadow';
    console.log(postData.style.bgColor);
    mainPost.setAttribute('style',`background-color:${postData.style.bgColor};color: ${postData.style.fontColor};font-size:${postData.style.fontSize}px;font-family:${postData.style.fontFamily}`)
    

    let post = postData.post;
    mainPost.innerHTML = post;

    
    postSubmissionMaintain.appendChild(mainPost);

    //post take by using function

                // end post submission maintain

 

                 //start  post-feedback counter

    let postFeedBackCounter = document.createElement('div');
    postFeedBackCounter.className = 'post-feedback-counter bg-light d-flex';

            //wrap second div
     wrapOnePost.appendChild(postFeedBackCounter);      

    let likeCountMaintain = document.createElement('div');
    likeCountMaintain.className = 'like-counter-maintain mr-auto';

    postFeedBackCounter.appendChild(likeCountMaintain);
    
    let likeIcon = document.createElement('i');
    likeIcon.className = 'fa fa-thumbs-up  ml-4 ';
    likeIcon.setAttribute('style','color:blue');

    likeCountMaintain.appendChild(likeIcon);

    let likeCountSpan = document.createElement('span');
    likeCountSpan.className = 'badge badge-light text-primary';
    //like count
    let like = '0';
    likeCountSpan.innerHTML = like;
    likeIcon.appendChild(likeCountSpan);


    let commentCountMaintain = document.createElement('div');
    commentCountMaintain.className = 'comment-count-maintain';

    postFeedBackCounter.appendChild(commentCountMaintain);

    let commentIcon = document.createElement('i');
    commentIcon.className = 'fa fa-comment';
    commentIcon.setAttribute('style','color:gray');

    commentCountMaintain.appendChild(commentIcon);

    let commentSpan = document.createElement('span');
    commentSpan.className = 'badge badge-light mr-4 text-primary';
    //calculateCommentCount
    let commentCount = '0';

    commentSpan.innerHTML = commentCount;

    commentIcon.appendChild(commentSpan);

                     //end post-feedback counter



    let hr2 = document.createElement('HR');
    wrapOnePost.appendChild(hr2);

                    //start feedback content

    let feedBackContent = document.createElement('div');
    feedBackContent.className = 'feedback-content';

    wrapOnePost.appendChild(feedBackContent);

    let feedBackFirstChild = document.createElement('div');
    feedBackFirstChild.className = 'd-flex flex-row bd-highlight';

    feedBackContent.appendChild(feedBackFirstChild);

    let likeButtonMaintain = document.createElement('div');
    likeButtonMaintain.className = 'px-2 bd-highlight like-content';
  
    feedBackFirstChild.appendChild(likeButtonMaintain);

    let likeBtn = document.createElement('button');
    likeBtn.className = 'btn btn-light';
    likeButtonMaintain.appendChild(likeBtn)

    var likeBtnIcon = document.createElement('i');
    likeBtnIcon.className = 'fa fa-thumbs-up';

    likeBtn.appendChild(likeBtnIcon);

    let likeSpanText = document.createElement('span');
    likeSpanText.className = 'pl-2';
    likeSpanText.innerHTML = 'Like'
  
    likeBtn.appendChild(likeSpanText);
    

    let commentBtnMaintain = document.createElement('div');
    commentBtnMaintain.className = 'px-2 bd-highlight comment-content';

    feedBackFirstChild.appendChild(commentBtnMaintain);

    let commentBtn = document.createElement('button');
    commentBtn.className = 'btn btn-light';
    

    commentBtnMaintain.appendChild(commentBtn);

    let commentIconBtn = document.createElement('i');
    commentIconBtn.className = 'fa fa-comment';

    commentBtn.appendChild(commentIconBtn);

    let commentSpanText = document.createElement('span');
    commentSpanText.className = 'pl-2';
    commentSpanText.innerHTML = 'comment'
    commentBtn.appendChild(commentSpanText);

                 //end feedback content

    let hr3 = document.createElement('HR');
    wrapOnePost.appendChild(hr3);

               

               //commment-post maintain
     
     let commentPostMaintain = document.createElement('div');
     commentPostMaintain.className = 'comment-post-maintain';
     commentPostMaintain.setAttribute('style','display: none;')

     wrapOnePost.appendChild(commentPostMaintain);
     
     let commentHeader = document.createElement('div');
     commentHeader.className = 'comment-header bg-light';

     commentPostMaintain.appendChild(commentHeader);

     let commentPostFlex = document.createElement('div');
     commentPostFlex.className = 'd-flex bd-highlight';

     commentHeader.appendChild(commentPostFlex);

     let nameFormMaintain = document.createElement('div');
     nameFormMaintain.className = 'bd-highlight  p-2';

     commentPostFlex.appendChild(nameFormMaintain);

     let nameInput = document.createElement('input');
     nameInput.className = 'form-control';
     nameInput.id = 'commenterNameInput'
     nameInput.setAttribute('style','width: 120px');
     nameInput.setAttribute('type','text');
     nameInput.setAttribute('placeholder','Enter Name');

     nameFormMaintain.appendChild(nameInput);

     let commentInputMaintain = document.createElement('div');
     commentInputMaintain.className = 'p-2 flex-grow-1 bd-highlight';

     commentPostFlex.appendChild(commentInputMaintain);

     let commentArea = document.createElement('textarea');
     commentArea.className = 'form-control';
     commentArea.id = 'commentArea'
     commentArea.setAttribute('style','width: 180px');
     //commentArea.setAttribute('id','exampleFormControlTextarea1');
     commentArea.setAttribute('rows','3');
     commentArea.setAttribute('placeholder','write your comment');

     commentInputMaintain.appendChild(commentArea);

     let commnetSubmitBtnMaintain = document.createElement('div');
     commnetSubmitBtnMaintain.className = 'p-2 bd-highlight';

     commentPostFlex.appendChild(commnetSubmitBtnMaintain);

     let commentSubmitBtn = document.createElement('button');
     commentSubmitBtn.className = 'btn btn-primary mt-4';
     commentSubmitBtn.id = 'commentSubmitBtn'
     commentSubmitBtn.setAttribute('type','submit');
     commentSubmitBtn.innerHTML = 'submit';

     
     commnetSubmitBtnMaintain.appendChild(commentSubmitBtn);

   
     commnetSubmitBtnMaintain.addEventListener('click',function(){
        
        var obj = getCommentData(nameInput,commentArea);
        if(postData.comment){
           obj.id = postData.comment.length + 1; 
           postData.comment.push(obj);
        }
        else{
            var comment = [];
            obj.id = 1;
            comment.push(obj)
            postData.comment = comment;
        }
        console.log(JSON.stringify(postData));
        axios.put(`${URL}/${postData.id}`,postData)
        .then((res) => {
         allCommentMaintain.appendChild(newCommentCreate(getCommentData(nameInput,commentArea)));
        })
       .catch((err) => console.log(err));  
     })
     
     

 
     //commment btn action

     commentBtn.addEventListener('click',function(){
        if(commentPostMaintain.style.display==='none'){
            commentPostMaintain.style.display = 'block';
        }
        else{
            commentPostMaintain.style.display = 'none';
        }

      
     })
 
    let hr4 = document.createElement("HR");
    wrapOnePost.appendChild(hr4);

    let allCommentMaintain = document.createElement('div');
    allCommentMaintain.className = 'all-comment-maintain';

    wrapOnePost.appendChild(allCommentMaintain);

    let commentList = postData.comments.allComments;

    if (commentList) {
        commentList.map((singleComment)=>{
            allCommentMaintain.appendChild(newCommentCreate(singleComment));
        });
    } 

    allPostContainer.appendChild(onePostMaintain);
}



function getCommentData(commenterName,commentText){
    
       var obj = {
           commenterName : commenterName.value,
           comment : commentText.value
       }
       console.log(commenterName.value);
       console.log(commentText.value);

       console.log(obj)
       return obj;
}

        // new comment creation 



function newCommentCreate(singleComment){

    let oneCommnetMaintain = document.createElement('div');
    oneCommnetMaintain.className = 'single-comment-maintain';

   

    let commentRow = document.createElement('div');
    commentRow.className = 'row bg-white m-3 shadow-sm p-2 rounded-left rounded-right';

    oneCommnetMaintain.appendChild(commentRow);

    let commentName = document.createElement('div');
    commentName.className = 'comment-name-section col-4  text-primary';
    commentName.innerHTML = singleComment.commenterName;

    commentRow.appendChild(commentName);

    let commentPost = document.createElement('div');
    commentPost.className = 'full-comment col-8';
    commentPost.innerHTML = singleComment.comment;

    commentRow.appendChild(commentPost);

    return oneCommnetMaintain;


}

var getFirstLetter = (name) => name.charAt(0);

var displayCommentPostBox = (commentPostMaintain)=>{
   
}

/*
    // post creation

     <section>
            <div class="container-fluid bg-white px-5" id="post-container">
                <div class="heading bg-info">
                 <p class="h3 text-white text-uppercase">All Post Showing</p>
                </div>
                <div class="all-post-maintain">
                    <div class="one-post-maintain">
                       <div class="wrap-one-post">
                            <div class="post-submission-maintain">
                                <div class="post-header">
                                    <div class="d-flex flex-row bd-highlight mb-3">
                                        <div class="p-2 bd-highlight profile-picture">
                                                <p data-letters="U"></p>
                                        </div>
                                        <div class="p-2 bd-highlight profile-name mt-1 text-primary">
                                            <p class="h4">User Name</p>
                                        </div>    
                                    </div>
                                </div>
                                <hr>
                                <div class="main-post shadow">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat in qui totam voluptates? Ut iusto officiis aperiam re dolorum ex commodi dignissimos! Molestias, natus eaque.
                                </div>
                            </div>
                            <div class="post-feedback-counter bg-light d-flex">
                                    <div class="mr-auto">
                                        <i class="fa fa-thumbs-up  ml-4 " style="color: blue"><span class="badge badge-light text-primary">0</span></i>
                                    </div>
                                    <div>
                                        <i class="fa fa-comment" style="color: gray"><span class="badge badge-light mr-4 text-primary">0</span></i>
                                    </div>
                            </div>
                            <hr>
                            <div class="feedback-content">
                                <div class="d-flex flex-row bd-highlight">
                                    <div class="px-2 bd-highlight like-content">
                                        <button type="button" class="btn btn-light
                                        "><i class="fa fa-thumbs-up fa-2x"></i> Like</button>
                                    </div>
                                    <div class="px-2 bd-highlight comment-content">
                                        <button type="button" class="btn btn-light
                                        "><i class="fa fa-comment fa-2x"></i> comment</button>
                                    </div>    
                                </div>
                            </div>
                            <hr>
                            <div class="comment-post-maintain">
                                <div class="comment-header bg-secondary">
                                    <div class="d-flex bd-highlight">
                                        <div class="bd-highlight  p-2">
                                                <input style="width: 120px;" class="form-control" type="text" placeholder="Enter Name">
                                        </div>
                                        <div class="p-2 flex-grow-1 bd-highlight ">
                                            <textarea style="width: 180px;" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="write your comment"></textarea>
                                        </div>
                                        <div class="p-2 bd-highlight">
                                            <button class="btn btn-primary mt-4" type="submit">submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="all-comment-maintain ">
                                <div class="single-comment-maintain">
                                    <div class=" row bg-white m-3 shadow-sm p-2 rounded-left rounded-right">
                                            <div class="comment-name-section col-4  text-primary">
                                                    Jubel Ahmed
                                            </div>
                                            <div class="full-comment col-8">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, enim quae. Dolorem 
                                         </div>
                                    </div> 
                                </div>
                               
                            </div>
                       </div>
                    </div>


                    <!-- second post-->

                </div>
            </div>    
    </section>

*/