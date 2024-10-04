const jwtMiddleware=(req,res,next)=>{
    console.log("Inside the jwtmiddleware");
    //get the token from the request
    let token= req.headers['authorization'].slice(7)
    console.log(token);
    //verify the token
    const jwtResponse=jwt.verify(token,'superkey2024')
    console.log(jwtResponse);

    next()
    
}

module.exports =jwtMiddleware