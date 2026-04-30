// Handling request and responce ->
    //express application handles http request and responce
    //   request -
//          the request object contain info anout the client request.
      //    ex - urlencoded, header, query parameters,request ReportBody
     
//Query arameters (imp interview questuion) ->
    //app.get('/',(req,res) =>{
    //     console.log(req.query.name);
    //   })
    //user ? name = sakshi

// activity->
// detailed study of query parameters with atleast 3-4 examples
// where we use it in companies

//responce - the response object send the data back to  the client
//common responce methods- 
     // responce.send-send text
     //responce.json - sends json data
     //response.status- check http status
     //responce.sendfile - send file

//EXAMPLE of responce
//exp.5 ->
   //const express =
  //app.get('/',(req,res) => {
    //const T = new Date();
    //res.json({
      //mess:"hello",
      //Time:T
      //})
  //  });